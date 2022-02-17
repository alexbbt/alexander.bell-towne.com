/* eslint-disable class-methods-use-this */
import { HELP } from './constants';

class Wedding implements Command {
  alias = [
    'wedding',
    'love',
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

  run(): CommandOutput {
    window.setTimeout(() => {
      window.location.href = 'https://wedding.bell-towne.com';
    }, 3000);
    return {
      status: 0,
      output: 'Redirecting to wedding.bell-towne.com.',
    };
  }
}

export default Wedding;
