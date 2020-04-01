/* eslint-disable import/prefer-default-export */
export function parseFileName(file: string | null | undefined): string | null | undefined {
  if (file) {
    if (file.startsWith('./')) {
      return file.substring(2);
    }
  }

  return file;
}
