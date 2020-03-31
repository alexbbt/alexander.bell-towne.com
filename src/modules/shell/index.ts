
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

  private previous(input: string): string | null {
    return this.history.previous(input);
  }

  private next(input: string): string | null {
    return this.history.next(input);
  }

  keyup(key: string, input: string): ShellAction {
    if (key === 'Enter') {
      return this.run(input);
    }

    if (key === 'ArrowUp') {
      return {
        input: this.previous(input),
      };
    }

    if (key === 'ArrowDown') {
      return {
        input: this.next(input),
      };
    }

    return {};
  }

  run(input: string): ShellAction {
    this.history.add(input);

    const { command, args } = parse(input);

    const action = this.executor.execute(command, args);

    if (action.input == null) {
      action.input = '';
    }

    if (action.route == null) {
      action.route = 'terminal';
    }

    return action;
  }
}

export default Shell;

/**
 * ideas:
 * * pipe
 * * tabs
 */
