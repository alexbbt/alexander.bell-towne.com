/* eslint-disable class-methods-use-this */
import { FILES } from './constants';
import { parseFileName } from './utils';

class List implements Command {
  alias = [
    'ls',
    'list',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    const parsedFile = parseFileName(args[0]);
    switch (parsedFile) {
      case '':
      case '.':
      case './':
      case null:
      case undefined:
        return {
          status: 0,
          output: FILES.map((f) => `  ${f}`).join('\n'),
        };
      default:
        return {
          status: 1,
          output: `ls: ${args[0]}: No such file or directory`,
        };
    }
  }
}

export default List;
