const queryString = require("querystring") // use to read the data in readable form 

function userDataSubmit(req,resp){
    let dataBody = [];
    req.on('data',(chunk)=>{
        dataBody.push(chunk)
    });
    req.on('end',()=>{
        let rawData = Buffer.concat(dataBody).toString()
        // reading the data in terminal in readable form 
        let readableData = queryString.parse(rawData)
        // console.log(readableData); 
        let dataString  = `my name is ${readableData.name} and my email id is ${readableData.email}`
        console.log(dataString);
    })
    resp.write(`<h1> you can get user form here <h1/>`)
}

module.exports=userDataSubmit;