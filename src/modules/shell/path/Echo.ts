/* eslint-disable class-methods-use-this */

const HELP = 'Usage: echo [string ...]';

class Echo implements Command {
  alias = [
    'echo',
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

  run(args: string[]): CommandOutput {
    const str = args
      .join(' ')
      .replace(/\\n/g, '\n');

    return {
      status: 0,
      output: str,
    };
  }
}

export default Echo;
