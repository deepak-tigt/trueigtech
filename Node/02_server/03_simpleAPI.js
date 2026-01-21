// creating simple api in which static data is used 

const http = require('http')

// taking array as our static data
const userData = [
    {name:'deepak',age:'21',email:'example1@gmail.com'},
    {name:'ajay',age:'22',email:'example2@gmail.com'},
    {name:'ayush',age:'23',email:'example3@gmail.com'},
    {name:'ashish',age:'233',email:'example4@gmail.com'},
    {name:'aryan',age:'20',email:'example5@gmail.com'}
]
http.createServer((req,resp)=>{
    // we have to set header for the response
    resp.setHeader("Content-Type",'application/json')
    // first we have to stringify the data 
    resp.write(JSON.stringify(userData));
    resp.end("");
}).listen(5500) 