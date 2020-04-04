
import HistoryManager from './HistoryManager';
import OutputManager from './OutputManager';
import Executor from './Executor';
import { parseInputString } from './utils';
import path from './path';
import { escapeRegExp } from './path/utils';
import { fs } from './tracking';
import Stream from './Stream';

class Shell {
  private history: HistoryManager;

  private output: OutputManager;

  private executor: Executor;

  constructor() {
    this.history = new HistoryManager();
    this.output = new OutputManager(new Stream());
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

    if (key === 'Tab') {
      return {
        input: this.tabComplete(input),
      };
    }

    return {};
  }

  run(input: string): ShellAction {
    this.history.add(input);

    const commands = parseInputString(input);

    fs('Run Command', {
      input,
      commands,
    });

    const action = this.executor.execute(commands);

    if (action.input == null) {
      action.input = '';
    }

    if (action.route == null) {
      action.route = 'terminal';
    }

    return action;
  }

  // eslint-disable-next-line class-methods-use-this
  tabComplete(input: string): string {
    const commands = parseInputString(input);

    const lastCommand = commands.pop();
    if (lastCommand == null) {
      return input;
    }

    const match = path.find((c) => c.matches(lastCommand.command));

    if (!match) {
      return input;
    }

    const replace = match.tabComplete(lastCommand.args);

    if (!replace) {
      return input;
    }

    const escapedRegExp = escapeRegExp(replace.input);
    const replaceRegex = new RegExp(`${escapedRegExp}$`);
    const replaceString = input.replace(replaceRegex, replace.output);

    fs('Tab Complete', {
      input,
      lastCommand,
      replaceString,
    });

    return replaceString;
  }
}

export default Shell;
