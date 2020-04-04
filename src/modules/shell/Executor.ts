import OutputManager from './OutputManager';
import path from './path';
import Help from './path/Help';
import { fs } from './tracking';

class Executor {
  private output: OutputManager;

  private lastStatus: number;

  constructor(output: OutputManager) {
    this.output = output;
    this.lastStatus = 0;
  }

  execute(commands: ShellCommand[]): ShellAction {
    if (commands[0].command === 'clear') {
      this.output.clear();
      return {
        output: this.output.getOutput(),
      };
    }

    // Clear keeps the same status.
    this.lastStatus = 0;

    if (commands[0].command === 'home') {
      return {
        output: this.output.getOutput(),
        route: 'home',
      };
    }

    let lastOutput: CommandOutput = {
      status: this.lastStatus,
      output: '',
    };

    commands.forEach((command) => {
      if (this.lastStatus > 0) {
        return;
      }

      let { args } = command;

      if (lastOutput.output) {
        // eslint-disable-next-line no-param-reassign
        args = args.concat(lastOutput.output);
      }

      lastOutput = this.executeSingleCommand({
        ...command,
        args,
      });
    });

    this.lastStatus = lastOutput.status;
    this.output.add(lastOutput.output);

    fs('Execute Command', {
      status: lastOutput.status,
      output: lastOutput.output,
    });

    this.output.commands(commands, this.lastStatus);

    this.output.write();

    return {
      output: this.output.getOutput(),
      route: lastOutput.route,
    };
  }

  executeSingleCommand(shellCommand: ShellCommand): CommandOutput {
    const { command, args } = shellCommand;

    const match = path.find((c) => c.matches(command));

    if (match) {
      if (args && args.includes('--help')) {
        return match.help(args);
      }
      return match.run(args);
    }
    if (command === '') {
      this.output.add('');
      return {
        output: '',
        status: this.lastStatus,
      };
    }

    const output = new Help().run();
    output.status = 1;
    output.output = `Command '${command}' not recognized\n\n${output.output}`;

    return output;
  }
}

export default Executor;
