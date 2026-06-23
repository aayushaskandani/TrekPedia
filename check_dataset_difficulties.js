import { TREKS } from './data/treks.js';

const difficulties = new Set();
Object.values(TREKS).forEach(ts => {
  ts.forEach(t => {
    difficulties.add(t.difficulty);
  });
});

console.log("Unique difficulties found in dataset:", Array.from(difficulties));
