interface CommandOutput {
  status: number;
  output: string;
}

interface Command {
  matches(command: string): boolean;
  run(args: string[]): CommandOutput;
}
