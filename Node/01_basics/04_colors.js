// here we are installing the external package and using it the package name is color

const colors = require('colors')
const { log } = require('console')


console.log(colors.red("hi this is deepak "))
console.log(colors.bgBlue("hi this is deepak "))
console.log(colors.green("hi this is deepak "))


// when we do the npm install package name then 
// node modules are created , package-lock.json and package.json files are created

// package.json -> it takes the details of our project like which dependency is in the project or module like here colors 
// package-lock.json -> it stores the inner dependency installed for the module or dependency that is stored in the package.json
// node_modules -> it stores the compelte package in it like the "colors"