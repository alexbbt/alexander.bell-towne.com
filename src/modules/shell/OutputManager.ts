import Stream from './Stream';

class OutputManager {
  private output: OutputSet[];

  private queue: OutputSet;

  private stdout: Stream

  constructor(stdout: Stream) {
    this.output = [];
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
    this.output.push(this.queue);
    this.queue = {
      commandLine: '',
      output: [],
    };
    this.stdout.write(this.output);
  }

  getOutput(): OutputSet[] {
    return this.output.slice().reverse();
  }

  clear() {
    this.output = [];
  }
}

export default OutputManager;
