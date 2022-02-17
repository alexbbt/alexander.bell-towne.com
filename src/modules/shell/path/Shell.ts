/* eslint-disable class-methods-use-this */
import { OUTPUT } from './files/resume.sh';
import { parseFileName, fileBasedTabComplete } from './utils';

const HELP = `Usage: sh [script-file]

Aliases:
- sh
- bash
- zsh
`;

class Shell implements Command {
  alias = [
    'sh',
    'bash',
    'zsh',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  help(): CommandOutput {
    return {
      status: 0,
      output: HELP,
    };
  }

  tabComplete(args: string[]): TabComplete | null {
    return fileBasedTabComplete(args);
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

export default Shell;
