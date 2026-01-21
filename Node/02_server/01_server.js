
// import the core package 
const http = require('http');

// create server and give its port address
// http.createServer().listen(8000); 

// create server and pass req and resp 
http.createServer((req,resp)=>{
    resp.write("<h1>this is in response using the nodemon <h1/>")
    resp.write("deepak this side ") // we can also pass html here 
    resp.end(" end ") // end is required to complete the request 
}).listen(8000)


http.createServer((req,resp)=>{
    resp.write("hello server 2")
    resp.end("!")
}).listen(4000)

// we can create multiple servers with the different port address


