import Stream from './Stream';
import { CURSOR_HOME } from './constants';

class OutputManager {
  private queue: OutputSet;

  private stdout: Stream

  constructor(stdout: Stream) {
    this.queue = {
      commandLine: '',
      output: [],
    };
    this.stdout = stdout;
  }

  commands(commands: ShellCommand[], code: number) {
    let prefix = '>';

    if (code > 0) {
      prefix = prefix.fontcolor('red');
    } else {
      prefix = prefix.fontcolor('green');
    }

    const line = commands.map((command) => [command.command, ...command.args].join(' ')).join(' | ');
    this.queue.commandLine = `${prefix} ${line}`;
  }

  add(line: string) {
    let output = line;

    if (output.startsWith('RAW_HTML')) {
      output = output.substring('RAW_HTML'.length);
    } else {
      // only if it is not already html.
      output = String(output)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br>')
        .replace(/ /g, '&nbsp;');
    }

    this.queue.output.push(output);
  }

  write() {
    this.stdout.write(this.queue);
    this.queue = {
      commandLine: '',
      output: [],
    };
  }

  clear() {
    this.stdout.write({
      commandLine: CURSOR_HOME,
    });
  }
}

export default OutputManager;
