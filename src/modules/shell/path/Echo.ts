/* eslint-disable class-methods-use-this */
class Echo implements Command {
  alias = [
    'echo',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(args: string[]): CommandOutput {
    return {
      status: 0,
      output: args.join(' '),
    };
  }
}

export default Echo;
