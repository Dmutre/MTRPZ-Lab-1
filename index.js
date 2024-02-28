const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;

function tryCatchFunction(handle) {
  try {
    handle();
  } catch(error) {
    console.log(error.message);
    process.exit(0);
  }
}

function main() {
  const dataFromInputFile = readFile();
  console.log(dataFromInputFile);
}

function readFile() {
  return fs.readFileSync(getPathFromDir(inputFilePath), {encoding: 'utf8'});
}

function getPathFromDir(filePath) {
  return path.join(__dirname, filePath);
}

tryCatchFunction(main);