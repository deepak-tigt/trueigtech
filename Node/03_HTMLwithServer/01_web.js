const http = require("http") // for server 
const fs = require("fs") // for readidng the file


http.createServer((req,resp)=>{
    // passing the html file in the fs to read the file 
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            resp.write('internal server error');
            resp.end();
            return
        }
        resp.writeHead(200,{"content-type":"text/html"})
        resp.write(data)
        resp.end()
    })
}).listen(3000)