import fs from 'fs';

const css = fs.readFileSync('./css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((line, index) => {
  if (line.includes('card-difficulty')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
