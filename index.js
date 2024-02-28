const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input path to file: ', (data) => {
  console.log(`You inputed: ${data}`);
  rl.close();
});
