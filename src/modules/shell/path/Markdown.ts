/* eslint-disable class-methods-use-this */
import marked from 'marked';

const HELP = `Usage: md [strings ...]

Aliases:
- md
- markdown
`;

class Markdown implements Command {
  alias = [
    'md',
    'markdown',
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
        output: 'Must provide markdown a string to render (try piping)',
        status: 1,
      };
    }

    const str = args
      .join(' ')
      .replace(/\\n/g, '\n');

    return {
      output: `RAW_HTML${marked(str)}`,
      status: 0,
    };
  }
}

export default Markdown;
