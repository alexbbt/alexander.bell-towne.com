import { HELP, FILES } from './constants';

import FACE from '../files/face.png';
import EXPERIENCE from '../files/experience.md';
import EDUCATION from '../files/education.md';

class Shell {
  constructor() {
    this.output = [];
    this.history = [];
    this.index = -1;
    this.previousCode = 0;
  }

  previous() {
    return this.getAtIndex(this.index + 1);
  }

  next() {
    return this.getAtIndex(this.index - 1);
  }

  getAtIndex(index) {
    if (index >= 0) {
      this.index = index;
      return this.history[index];
    }
    return null;
  }

  run(command, ...args) {
    this.index = -1;
    if (command !== '' && command != null) {
      this.history.unshift([command, ...args]);
    }
    const success = this.process(command, ...args);
    let prefix = '>';
    if (success > 0) {
      prefix = prefix.fontcolor('red');
    } else {
      prefix = prefix.fontcolor('green');
    }

    // Return -1 to not print command.
    if (success >= 0) {
      const output = [command, ...args].join(' ');
      this.output.unshift(`${prefix} ${output}`);
      this.previousCode = success;
    } else {
      this.previousCode = 0;
    }

    return this.output;
  }

  process(command, ...args) {
    switch (command) {
      case 'echo':
        return this.echo(args);
      case 'clear':
        return this.clear();
      case 'ls':
        return this.ls(args);
      case 'cat':
        return this.cat(args);
      case '':
        return this.previousCode;
      default:
        return this.help(command);
    }
  }

  print(stuff) {
    let output = stuff;

    output = output.split('\n').join('<br>');
    output = output.split(' ').join('&nbsp;');

    this.output.unshift(output);
    return 0;
  }

  help(command) {
    this.print(HELP);

    if (command !== 'help') {
      this.print(`Command '${command}' not recognized`);
      return 1;
    }

    return 0;
  }

  echo(args) {
    this.print(args.join(' '));
    return 0;
  }

  clear() {
    this.output = [];
    return -1;
  }

  ls() {
    this.print(FILES.map((f) => `  ${f}`).join('\n'));
    return 0;
  }

  cat(args) {
    switch (args[0]) {
      case 'face.png':
        this.print(FACE);
        return 0;
      case 'experience.md':
        this.print(EXPERIENCE);
        return 0;
      case 'education.md':
        this.print(EDUCATION);
        return 0;
      case '':
      case null:
      case undefined:
        this.print('cat: must have an argument');
        return 1;
      default:
        this.print(`cat: ${args[0]}: No such file or directory`);
        return 1;
    }
  }
}

export default Shell;

/**
 * ideas:
 * * pipe
 * * tabs
 */
