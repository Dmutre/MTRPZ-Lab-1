const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
