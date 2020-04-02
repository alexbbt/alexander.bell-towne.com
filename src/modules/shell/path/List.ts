/* eslint-disable class-methods-use-this */
import { FILES } from './constants';
import { parseFileName, fileBasedTabComplete } from './utils';

const HELP = `Usage: ls [folder]

Aliases:
- ls
- list
`;

class List implements Command {
  alias = [
    'ls',
    'list',
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

  run(files: string[]): CommandOutput {
    const filteredFiles = files.filter((f) => f);
    if (filteredFiles.length === 0) {
      return {
        status: 1,
        output: 'cat: must have an argument',
      };
    }

    const output: CommandOutput = {
      status: 0,
      output: '',
    };

    let errorOutput = '';

    filteredFiles.forEach((file) => {
      const parsedFile = parseFileName(file);

      switch (parsedFile) {
        case '':
        case '.':
        case './':
        case null:
        case undefined:
          if (filteredFiles.length > 1) {
            output.output += `\n${file}:\n`;
          }
          output.output += FILES.map((f) => `  ${f}`).join('\n');
          break;
        default:
          if (FILES.includes(parsedFile)) {
            output.output += parsedFile;
          } else {
            errorOutput += `ls: ${file}: No such file or directory\n`;
            output.status = 1;
          }
      }

      output.output += '\n';
    });

    output.output = errorOutput + output.output;

    return output;
  }
}

export default List;
