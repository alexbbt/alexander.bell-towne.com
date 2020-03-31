export interface UserInput {
  command: string;
  args: string[];
}

function combineWhiteSpace(str: string): string {
  return String(str).trim().replace(/ +(?= )/g, '');
}

export function parse(input: string): UserInput {
  const parsed: string[] = combineWhiteSpace(input).split(' ');

  return {
    command: parsed[0],
    args: parsed.slice(1),
  };
}
