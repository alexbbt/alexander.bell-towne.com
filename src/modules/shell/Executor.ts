import OutputManager from './OutputManager';
import path from './path';
import Help from './path/Help';

class Executor {
  private output: OutputManager;

  private lastStatus: number;

  constructor(output: OutputManager) {
    this.output = output;
    this.lastStatus = 0;
  }

  execute(command: string, args: string[]): ShellAction {
    if (command === 'clear') {
      this.output.clear();
      return {
        output: this.output.getOutput(),
      };
    }

    if (command === 'home') {
      return {
        output: this.output.getOutput(),
        route: 'home',
      };
    }

    const action: ShellAction = {};
    const match = path.find((c) => c.matches(command));

    if (match) {
      const { status, output, route } = match.run(args);

      this.lastStatus = status;
      this.output.add(output);

      action.route = route;
    } else if (command === '') {
      this.output.add('');
    } else {
      const { output } = new Help().run();
      this.lastStatus = 1;
      this.output.add(output);
      this.output.add(`Command '${command}' not recognized`);
    }

    this.output.command(command, args, this.lastStatus);

    action.output = this.output.getOutput();
    return action;
  }
}

export default Executor;
