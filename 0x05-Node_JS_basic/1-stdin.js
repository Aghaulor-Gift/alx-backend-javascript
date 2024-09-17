// function that takes input and print output
const readline = require('readline');

function handleInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });

  rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });
}

module.exports = handleInput;

if (require.main === module) {
  handleInput();
}
