import fs from 'fs';

const css = fs.readFileSync('./css/style.css', 'utf8');
let openCount = 0;
let stack = [];
let lines = css.split('\n');

lines.forEach((line, idx) => {
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '{') {
      openCount++;
      stack.push({ char, line: idx + 1 });
    } else if (char === '}') {
      openCount--;
      if (stack.length === 0) {
        console.log(`Mismatched closing brace '}' at line ${idx + 1}`);
      } else {
        stack.pop();
      }
    }
  }
});

if (stack.length > 0) {
  console.log(`Unclosed braces remaining:`);
  stack.forEach(s => console.log(`  Unclosed '{' at line ${s.line}`));
} else {
  console.log("SUCCESS: Braces match perfectly.");
}
