import { TREKS } from './data/treks.js';

console.log("Current treks in dataset:");
Object.entries(TREKS).forEach(([country, list]) => {
  console.log(`\n--- ${country} (${list.length} treks) ---`);
  list.forEach(t => {
    console.log(`  - [${t.id}] ${t.name} (${t.region})`);
  });
});
