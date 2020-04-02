interface Command {
  matches(command: string): boolean;
  run(args: string[]): CommandOutput;
  help(args: string[]): CommandOutput;
  tabComplete(args: string[]): TabComplete | null;
}
