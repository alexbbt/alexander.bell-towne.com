/* eslint-disable class-methods-use-this */
import FACE from './files/face.png';
import EXPERIENCE from './files/experience.md';
import EDUCATION from './files/education.md';
import METADATA from './files/metadata.md';

import { SCRIPT } from './files/resume.sh';
import { parseFileName } from './utils';

class Cat implements Command {
  alias = [
    'cat',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    const parsedFile = parseFileName(args[0]);
    switch (parsedFile) {
      case 'face.png':
        return {
          status: 0,
          output: FACE,
        };
      case 'experience.md':
        return {
          status: 0,
          output: EXPERIENCE,
        };
      case 'education.md':
        return {
          status: 0,
          output: EDUCATION,
        };
      case 'metadata.md':
        return {
          status: 0,
          output: METADATA,
        };
      case 'resume.sh':
        return {
          status: 0,
          output: SCRIPT,
        };
      case '':
      case null:
      case undefined:
        return {
          status: 1,
          output: 'cat: must have an argument',
        };
      case '.':
      case './':
      case '..':
      case '../':
        return {
          status: 1,
          output: `cat: ${args[0]}: Is a directory`,
        };
      default:
        return {
          status: 1,
          output: `cat: ${args[0]}: No such file or directory`,
        };
    }
  }
}

export default Cat;
