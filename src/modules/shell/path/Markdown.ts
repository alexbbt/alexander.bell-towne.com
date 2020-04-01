/* eslint-disable class-methods-use-this */
import marked from 'marked';

class Cat implements Command {
  alias = [
    'md',
    'markdown',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    if (args[0]) {
      return {
        output: marked(args.join('\n')),
        status: 0,
      };
    }
    return {
      output: 'Must provide markdown string to render (try piping)',
      status: 1,
    };
  }
}

export default Cat;
