
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

  previous(input: string): string | null {
    return this.history.previous(input);
  }

  next(input: string): string | null {
    return this.history.next(input);
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
