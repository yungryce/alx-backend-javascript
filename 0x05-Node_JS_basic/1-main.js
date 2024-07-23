const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']); // Replace 'yourScript.js' with the name of your main script

let output = '';

child.stdout.on('data', (data) => {
  output += data.toString();
});

child.on('close', (code) => {
  console.log('Child process exited with code', code);
  console.log('Captured output:', output);
});

child.stdin.write('John Doe\n');
child.stdin.end();

