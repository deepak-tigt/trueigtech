const http = require("http")

// we have to set the header tag with the content type  text/html
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html") // set the header for the file content 
    resp.write("<h2>here is the h2 tag content <h2/>")
    // if we have to give the large response
    resp.write(`
        <html>
        <head><head/>
        <body>
        <h1>my <h1/>
        <h1>name <h1/>
        <h1>is <h1/>
        <h1>deepak<h1/>
        <body/>
        <html/>
        `)

    resp.end() // end is used to end the request
}).listen(8000)