const addbutton = document.getElementById('add')
const del = document.getElementById("delete")
const root = document.getElementById("root")
const taskname = document.getElementById("name")
const taskdesc = document.getElementById("task")

function createnote(name , desc){
    if(name != " " && desc != " "){
        const newnote = document.getElementById("newNote")
        newnote.innerText = 'Note'
        newnote.classList.add("note")
        root.appendChild(newnote)
        console.log(newnote)
        console.log('child append')
    }
    else{
        console.log('the feilds are empty fill them first')
    }
}
addbutton.addEventListener('click',()=>{
    createnote(taskname.ariaValueMax,taskdesc.value);
    taskname.value = "";
    taskdesc.value = "";
})