/* eslint-disable import/prefer-default-export */
function combineWhiteSpace(str: string): string {
  return String(str).trim().replace(/ +(?= )/g, '');
}

export function parseInputString(input: string): ShellCommand[] {
  return combineWhiteSpace(input).split('|')
    .map((command) => {
      const parsed: string[] = combineWhiteSpace(command).split(' ');

      return {
        command: parsed[0],
        args: parsed.slice(1),
      };
    });
}
