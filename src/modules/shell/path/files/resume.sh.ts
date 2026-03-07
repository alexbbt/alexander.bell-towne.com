import { NAME, CONTACT_LINE, TAGLINE } from '@/content/me';
import EXPERIENCE from './experience.md';
import EDUCATION from './education.md';
import METADATA from './metadata.md';

const HEADER = `
# ${NAME}

${CONTACT_LINE}

_${TAGLINE}_

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
