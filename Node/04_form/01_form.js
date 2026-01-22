const http = require("http")
const fs = require("fs");
const queryString = require("querystring") // use to read the data in readable form 

http.createServer((req,resp)=>{
    // reading the index.html file 
    
        fs.readFile("index.html","utf-8",(err,data)=>{
        console.log(req.url); // checking from where the request is comming 
        if(err){
            resp.end("internal server error ")
            return
        }
        // file header 
        resp.writeHead(200,{"Content-type":"text/html"})
        if(req.url == '/'){
            resp.write(data)
            resp.end()
        }
        else if(req.url=='/submit'){

        // collecting the chunks of the data in the dataBody using the req.on which take 2 parameters
        let dataBody = [];
        req.on('data',(chunk)=>{
            dataBody.push(chunk)
        })

        //collect all the chunks at the end of the req.on  in the buffer and concatinate them 
        req.on('end',()=>{
            let rawData = Buffer.concat(dataBody).toString()
            // reading the data in terminal in readable form 
            let readableData = queryString.parse(rawData)
            // console.log(readableData); 
            let dataString  = `my name is ${readableData.name} and my email id is ${readableData.email}`
            console.log(dataString);

            
        })
        resp.write("<h1>form submited<h/>")
        }
    resp.end()
       
    })
    
    // page changes after the form is submitted   
    
    
}).listen(3200)