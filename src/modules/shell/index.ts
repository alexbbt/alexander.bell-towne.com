
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
}

export default Shell;

/**
 * ideas:
 * * pipe
 * * tabs
 */
