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
    const output: CommandOutput = {
      status: 0,
      output: '',
    };

    let errorOutput = '';

    if (files.length === 0) {
      files.push('');
    }

    files.forEach((file) => {
      const parsedFile = parseFileName(file);

      switch (parsedFile) {
        case '':
        case '.':
        case './':
        case null:
        case undefined:
          if (files.length > 1) {
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
