/* eslint-disable class-methods-use-this */
import FACE from './files/face.png';
import EXPERIENCE from './files/experience.md';
import EDUCATION from './files/education.md';
import METADATA from './files/metadata.md';

import { SCRIPT } from './files/resume.sh';
import { parseFileName, fileBasedTabComplete } from './utils';

const HELP = 'Usage: cat [file ...]';

class Cat implements Command {
  alias = [
    'cat',
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

    filteredFiles.forEach((file) => {
      const parsedFile = parseFileName(file);
      switch (parsedFile) {
        case 'face.png':
          output.output += FACE;
          break;
        case 'experience.md':
          output.output += EXPERIENCE;
          break;
        case 'education.md':
          output.output += EDUCATION;
          break;
        case 'metadata.md':
          output.output += METADATA;
          break;
        case 'resume.sh':
          output.output += SCRIPT;
          break;
        case '.':
        case './':
        case '..':
        case '../':
          output.output += `cat: ${file}: Is a directory`;
          output.status = 1;
          break;
        default:
          output.output += `cat: ${file}: No such file or directory`;
          output.status = 1;
          break;
      }
      output.output += '\n';
    });

    return output;
  }
}

export default Cat;
