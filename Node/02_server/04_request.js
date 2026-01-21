
// here we are understanding how the req works on the different urls 

const http = require('http') // importing core package

// creating server
http.createServer(function (req, res) {
    console.log(req.headers.method)
    // if the url is localhost:5600/ then respose this
    if (req.url == "/") {
        res.write("<h1>home page <h1/>")
    }

    // else if url is localhost:5600/login then response this
    else if (req.url == "/login") {
        res.write("<h1>login page <h1/>")
    }

    // else other then those url then response this 
    else {
        res.write("other page")
    }

    res.end()
}).listen(5600)