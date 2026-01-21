const fs = require('fs');
const os = require('os');

// here are the predefined modules 

fs.writeFileSync("dummy.txt","trying with modules")

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

// global object like console.log

console.log(process.cwd);

// like if we want to use only the log from the console
const {log} = require('console')

log("custom log ")
