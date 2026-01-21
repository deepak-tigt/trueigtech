// Hands-on: Fetch data from a public API and display it

// there are two ways to do that 

// first useing the async and await 

const data1 = async ()=>{
    try {
        const response = await fetch("https://api.restful-api.dev/objects")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);  
    }
}

// data1();




// here we are using async await along with the setTimeout function

const data2 = setTimeout(async ()=>{
    try {
        const response = await fetch("https://api.restful-api.dev/objects")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);  
    }
},2000)

data2;

// as we know fetch give response in the promise so we are using .then() and .catch to handle it

fetch("https://api.restful-api.dev/objects")
.then((response)=>{
return response.json()
}).then((data)=>{  // we have used  two then because here the to convert the data in json will also take time so to handle it we have to use the another then
                    // as we have used the two await in the async await method 
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})

