import fs from 'fs';

const css = fs.readFileSync('./css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((line, index) => {
  const l = line.toLowerCase();
  if (l.includes('easy') || l.includes('moderate') || l.includes('hard')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
