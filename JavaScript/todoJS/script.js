const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
const addbutton = document.querySelector(".addTask")

// function addTask(){

//     let li = document.createElement("li")
//     li.innerHTML = inputBox.value;
//     taskList.appendChild(li);
// }

addbutton.addEventListener("click",(event)=>{
    if (inputBox.value!="") {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span")
        span.setAttribute("id","crossSpan")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        span.style.margin = "100px"
    }
    inputBox.value="";
    saveData();
    
})

taskList.addEventListener("click",(event)=>{
    if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
    saveData();
},false)

function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data")
}
showTask();