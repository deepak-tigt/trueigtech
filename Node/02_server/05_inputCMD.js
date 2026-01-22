const http = require("http");

const arg = process.argv;
// console.log("--------0",arg[2]);
const port = arg[2] 

// here we are using the dynamic port that changes when we give argument from the terminal 
http.createServer((req,res)=>{
    res.write("testing input from cmd")
    res.end()
}).listen(port)
