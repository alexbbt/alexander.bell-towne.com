/* eslint-disable class-methods-use-this */
import { OUTPUT } from './files/resume.sh';
import { parseFileName } from './utils';

class Cat implements Command {
  alias = [
    'sh',
    'bash',
    'zsh',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    const parsedFile = parseFileName(args[0]);
    switch (parsedFile) {
      case 'resume.sh':
        return {
          status: 0,
          output: OUTPUT,
        };
      case '':
      case null:
      case undefined:
        return {
          status: 1,
          output: 'sh: must have an argument',
        };
      case '.':
      case './':
      case '..':
      case '../':
        return {
          status: 1,
          output: `sh: ${args[0]}: Is a directory`,
        };
      default:
        return {
          status: 1,
          output: `sh: ${args[0]}: No such file or directory`,
        };
    }
  }
}

export default Cat;
