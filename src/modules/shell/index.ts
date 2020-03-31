import { FILES } from './constants';

import FACE from '../files/face.png';
import EXPERIENCE from '../files/experience.md';
import EDUCATION from '../files/education.md';

import HistoryManager from './HistoryManager';
import OutputManager from './OutputManager';
import Executor from './Executor';
import { parse } from './Parser';

class Shell {
  private history: HistoryManager;

  private output: OutputManager;

  private executor: Executor;

  constructor() {
    this.history = new HistoryManager();
    this.output = new OutputManager();
    this.executor = new Executor(this.output);
  }

  previous() {
    return this.history.previous();
  }

  next() {
    return this.history.next();
  }

  run(input: string) {
    this.history.add(input);

    const { command, args } = parse(input);

    this.executor.execute(command, args);

    return this.output.getOutput();
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
