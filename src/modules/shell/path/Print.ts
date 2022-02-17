/* eslint-disable class-methods-use-this */
import { print } from './utils';

const HELP = 'Usage: print [strings ...]';

class Print implements Command {
  alias = [
    'print',
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

  tabComplete(): TabComplete | null {
    return null;
  }

  run(args: string[]): CommandOutput {
    if (!args[0]) {
      return {
        output: 'Must provide print a string to render (try piping)',
        status: 1,
      };
    }

    let str = args
      .join(' ')
      .replace(/\\n/g, '\n');

    if (str.startsWith('RAW_HTML')) {
      str = str.substring('RAW_HTML'.length);
    }

    return {
      output: print(str),
      status: 0,
    };
  }
}

export default Print;
