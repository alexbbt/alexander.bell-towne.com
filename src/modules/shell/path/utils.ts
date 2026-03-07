import { RESUME_WINDOW_TITLE } from '@/content/me';
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

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Print a given string to a file.
 * Will open a new window.
 */
export function print(output: string): string {
  const printWindow = window.open('', 'PRINT', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

  if (!printWindow) {
    return 'There was an error printing your document';
  }

  printWindow.document.write(`<html><head><title>${RESUME_WINDOW_TITLE}</title>`);
  printWindow.document.write('<style>body{font-family:Georgia,serif;font-size:12pt;line-height:1.4;max-width:700px;margin:0.75in auto;padding:0;color:#111;} a{color:#111;}</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(output);
  printWindow.document.write('</body></html>');

  printWindow.document.close(); // necessary for IE >= 10
  printWindow.focus(); // necessary for IE >= 10*/

  printWindow.print();
  if (window.innerWidth >= 576) {
    window.setTimeout(() => {
      printWindow.close();
    }, 1000);
  }

  return 'Document Printed';
}
