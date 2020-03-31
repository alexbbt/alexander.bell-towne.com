/* eslint-disable class-methods-use-this */
import FACE from './files/face.png';
import EXPERIENCE from './files/experience.md';
import EDUCATION from './files/education.md';

class Cat implements Command {
  alias = [
    'cat',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    switch (args[0]) {
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
