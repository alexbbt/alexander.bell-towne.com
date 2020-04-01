interface CommandOutput {
  status: number;
  output: string;
  route?: string | null;
}

interface Command {
  matches(command: string): boolean;
  run(args: string[]): CommandOutput;
  help(args: string[]): CommandOutput;
}
