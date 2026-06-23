import fs from 'fs';

const js = fs.readFileSync('./js/main.js', 'utf8');
const lines = js.split('\n');

lines.forEach((line, index) => {
  if (line.includes('card-difficulty')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
