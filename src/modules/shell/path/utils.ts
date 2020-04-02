import { FILES } from './constants';

export function parseFileName(file: string | null | undefined): string | null | undefined {
  if (file) {
    if (file.startsWith('./')) {
      return file.substring(2);
    }
  }

  return file;
}

export function fileBasedTabComplete(args: string[]): TabComplete | null {
  const file = args.pop();
  const parsedFile = parseFileName(file);
  if (parsedFile == null) {
    return null;
  }

  const found = FILES.find((f) => f.startsWith(parsedFile));

  if (found == null) {
    return null;
  }

  return {
    input: parsedFile,
    output: `${found} `,
  };
}

export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
