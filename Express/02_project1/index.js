const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs");
const { json } = require("stream/consumers");
const app = express();
const port = 8000; 

// creating the middleware or the plugin to process the complete block of the user detail
app.use(express.urlencoded({extended:false}))
// middleware it convert the text data in the js object 
app.use(express.json())

// route 
// if /users is hit the return data in html 
app.get('/users',(req,res)=>{
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})


// rest api 

// if /api/users is hit the return data in json 
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

// dynamic parameter 
app.get('/api/users/:id',(req,res)=>{
    // this id is in string so convert it in number

    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id)
    return res.json(user)
});


// post request 
app.post('/api/users',(req,res)=>{
    const body = req.body;
    console.log(body);
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        // acknowledgement that yes user is created
        return res.json({status:"success",id:users.length})
    })
})

//patch user with id
app.patch('/api/users/:id',(req,res)=>{
    const body = req.body
    const id = Number(req.params.id);
    let index = users.findIndex((user)=>user.id===id)
    users[index] = {...users[index], ...body}
    console.log(index);
    

    console.log(users[index]);
    
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            return res.status(500).json({message:"update failed"})
        }
        else{
             return res.json({status:"success",user: users[index]})
        }
    })

})

// delete user with the id 
app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const index = users.findIndex((user)=> user.id === id) 
    const deleteUser = users.splice(index,1)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            return res.status(500).json({message:"delete failed"})
        }
        res.json({Status:`success `,deleteUser})

    })

})

app.listen(port,()=> console.log("server started ...")
)
