
const taskbtn=document.querySelector("#taskbtn");
const taskinput=document.querySelector("#taskinput");
const taskcontainer=document.querySelector(".task-container");
const checkboxs=document.querySelectorAll('input[type="checkbox"]');
const spanpara=document.querySelectorAll(".spanpara");
const deletebtns=document.querySelectorAll(".delete-btn");
const task=document.querySelectorAll('.task');
const totaltask=document.querySelector(".taskcount");
const Reset=document.querySelector("#resetbtn");
const label=document.querySelectorAll(".greentext");
const clearAll=document.querySelector("#clear");
label.forEach((item)=>{
    item.style.display=("none");
})
taskbtn.addEventListener("click",()=>{
    addtask();
});    
//  Code for outside boxes
checkboxs.forEach((checkbox,i)=>{
    checkbox.addEventListener("click",()=>{
        if(checkbox.checked===true){
            spanpara[i].style.textDecoration=("line-through");
            label[i].style.display=("inline"); 
        }
        else{
            spanpara[i].style.textDecoration=("none");
            label[i].style.display=("none");
        }
})
})
deletebtns.forEach((deletebtn,i)=>{
     deletebtn.addEventListener("click",()=>{
        task[i].remove();
        const tasklength=document.querySelectorAll('.task').length;
        totaltask.innerText=`Total Task: ${tasklength}`;
     })
})
const tasklength=document.querySelectorAll('.task').length;
    totaltask.innerText=`Total Task: ${tasklength}`;
Reset.addEventListener("click",()=>{
const checkboxs=document.querySelectorAll('input[type="checkbox"]');
const Allspans=document.querySelectorAll(".spanpara, .textspan");
const Allabels=document.querySelectorAll(".greentext");
    checkboxs.forEach((checkbox)=>{
        checkbox.checked=false;
    });
    Allspans.forEach((span)=>{
        span.style.textDecoration="none"; 
    });
    Allabels.forEach((item)=>{
        item.style.display=("none");
    })
});
const addtask=()=>{
    const userinput=taskinput.value.trim();
    if(userinput===""){
        return;
    }
    const newEL=document.createElement("div");
    taskcontainer.append(newEL); 
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    newEL.append(checkbox);
    const textspan=document.createElement("span");
    newEL.append(textspan);
    const label=document.createElement("span");
    label.innerText="Completed"; 
    label.style.color="green";
    label.classList.add("greentext");
    newEL.append(label);
    label.style.display=("none");
    const deletebtn=document.createElement("button");
    newEL.append(deletebtn);
    const btnimg=document.createElement("img");
    deletebtn.append(btnimg);
    btnimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACMTmmmAJLtRNGyrrJETz90KM8VdF2nxZX32cj835bA&s=10"
    btnimg.height=25; 
    textspan.innerText=userinput;
    textspan.classList.add("textspan")
    deletebtn.classList.add("delete-btn");
    checkbox.classList.add("checkbox");
    newEL.classList.add("task"); 
    checkbox.addEventListener("click",()=>{
        if(checkbox.checked===true){
           textspan.style.textDecoration=("line-through");
           label.style.display=("inline");
        }
        else{
            textspan.style.textDecoration=("none");
            label.style.display=("none");
        } 
    })
    const tasklength=document.querySelectorAll('.task').length;
    totaltask.innerText=`Total Task: ${tasklength}`;
 deletebtn.addEventListener("click",()=>{
        newEL.remove();  
        const tasklength=document.querySelectorAll('.task').length;
        totaltask.innerText=`Total Task: ${tasklength}`;
    }) 
const clearAll=document.querySelector=("#clear");
clear.addEventListener("click",()=>{
    newEL.remove();
const tasklength=document.querySelectorAll('.task').length;
totaltask.innerText=`Total Task: ${tasklength}`;
});  
} 
taskinput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addtask(); 
    }
})
clearAll.addEventListener("click",()=>{
    task.forEach((task)=>{
        task.remove();
const tasklength=document.querySelectorAll('.task').length;
        totaltask.innerText=`Total Task: ${tasklength}`;
    })  
})



