/* eslint-disable class-methods-use-this */
import { FILES } from './constants';

class List implements Command {
  alias = [
    'ls',
    'list',
  ];

  matches(command: string): boolean {
    return this.alias.includes(command);
  }

  run(): CommandOutput {
    return {
      status: 0,
      output: FILES.map((f) => `  ${f}`).join('\n'),
    };
  }
}

export default List;
