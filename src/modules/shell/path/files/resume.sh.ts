import EXPERIENCE from './experience.md';
import EDUCATION from './education.md';
import METADATA from './metadata.md';

const HEADER = `
# Alexander Bell-Towne

(509) 859-7437 | alexander@bell-towne.com | New York, NY

---
`;

export const SCRIPT = `
#!/bin/sh
cat << HEADER
${HEADER}
HEADER

cat experience.md

cat education.md

cat metadata.md
`;

export const OUTPUT = `
${HEADER}
${EXPERIENCE}
${EDUCATION}
${METADATA}
`;
