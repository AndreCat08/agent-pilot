'use strict';

const { hitungPPN } = require('./lib.js');

// CLI entry: `node src/index.js 100000` -> 11000
// Sengaja tetap ada supaya `node --check src/index.js` punya target,
// walau pipeline pilot tidak memakainya.
if (require.main === module) {
  const amount = Number(process.argv[2]);
  if (!Number.isFinite(amount)) {
    console.error('usage: node src/index.js <amount>');
    process.exit(1);
  }
  console.log(hitungPPN(amount));
}

module.exports = {};
