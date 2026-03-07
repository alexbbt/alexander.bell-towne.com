import EXPERIENCE from './experience.md';
import EDUCATION from './education.md';
import METADATA from './metadata.md';

const HEADER = `
# Alexander Bell-Towne

Seattle, WA • (509) 859-7437 • alexander@bell-towne.com • github.com/alexbbt

_Senior Software Engineer and Technical Lead with 8+ years building large-scale commerce and payments platforms at Block, specializing in distributed systems and high-volume transaction infrastructure._

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
