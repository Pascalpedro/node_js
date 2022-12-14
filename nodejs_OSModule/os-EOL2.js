// Node.js program to demonstrate the os.EOL constants

// Allocating os module
const os = require('os');

// Printing os.EOL character(s) with string
console.log("Paragraphs always contains EOL"
       + os.EOL + "EOL stands for end of line");

console.log("EOL varies from os to os" + os.EOL
       + "For windows it is \\r\\n" + os.EOL
       + "For POSIX it is \\n" + os.EOL);
