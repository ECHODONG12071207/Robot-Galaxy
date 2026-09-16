// Seeded demo values: stable for each model, unrelated to measured specifications.
window.robotDemoScores=id=>{let seed=2166136261;for(const c of id)seed=Math.imul(seed^c.charCodeAt(0),16777619);return Array.from({length:6},()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return 3+(seed>>>0)%8})};
