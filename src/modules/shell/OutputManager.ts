class OutputManager {
  private output: string[];

  constructor() {
    this.output = [];
  }

  command(command: string, args: string[], code: number) {
    let prefix = '>';

    if (code > 0) {
      prefix = prefix.fontcolor('red');
    } else {
      prefix = prefix.fontcolor('green');
    }

    const line = [command, ...args].join(' ');
    this.output.push(`${prefix} ${line}`);
  }

  add(line: string) {
    let output = line;

    output = output.split('\n').join('<br>');
    output = output.split(' ').join('&nbsp;');

    this.output.push(output);
  }

  getOutput(): string[] {
    return this.output.slice().reverse();
  }

  clear() {
    this.output = [];
  }
}

export default OutputManager;
