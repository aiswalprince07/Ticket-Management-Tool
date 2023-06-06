let addbtn = document.querySelector(".add-btn");
let modelCont = document.querySelector(".model-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let colors = ["lightpink","lightblue","lightgreen","black"];
let modelPriorityColor = colors[colors.length-1];
let allPriorityColors = document.querySelectorAll(".priority-color");
let removebtn = document.querySelector(".remove-btn");
let toolBoxColors = document.querySelectorAll(".color");


let removeFlag = false;
let addFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketsArr=[];

//fliter karne wla function bana rhe !!
for(let i = 0;i<toolBarColors.length;i++){
    toolBoxColors[i].addEventListener("click",(e)=>{
        let currentToolBoxColors = toolBoxColors[i].classList[0];  // ClassList matlab ...class="abc bcd gfg"   ..to isme index[0] = abc, index[1] = bcd  ye hota h !!
        //ek object bana rhe .. jisme parameter -->  ID,Task,Color_Priority

        let filteredTickets = ticketsArr.filter((ticketObj,idx)=>{
            return currentToolBoxColors ===ticketObj.ticketColor;
        })

        //Remove previous tickets
        let AllTicketCont = document.querySelectorAll(".ticket-cont");
        for(let i = 0;i<AllTicketCont.length;i++){
            AllTicketCont[i].remove;
        }

        //Display new filterd
    })
}


//Listener for model coloring  (click karne per border change means priority change )
allPriorityColors.forEach((colorElement,idx)=>{
    colorElement.addEventListener("click",(e)=>{
        allPriorityColors.forEach((pricolorEl)=>{
            pricolorEl.classList.remove("border");
        })
        colorElement.classList.add("border");

        modelPriorityColor = colorElement.classList[0];

    })
})


addbtn.addEventListener("click",(e)=>{
    //addFlag -> true ==> Model Display otherwise no
    addFlag = !addFlag;
    if(addFlag){
        modelCont.style.display = "flex";
    }else{
        modelCont.style.display = "none";   
    }

})

removebtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag;
})


modelCont.addEventListener("keydown",(e)=>{
    let key = e.key;
    // console.log(key);
    if(key === "Shift"){         //Shift me....S captial always

        createTicket(modelPriorityColor,shortid(),textAreaCont);
        // console.log(textAreaCont);// .value karna tha

        modelCont.style.display = "none";    //box ko dikhna ho to flex, agar nhi to 'none';
        addFlag =false; 
        textAreaCont.value="";   // textArea me agar content erase karke phir box lana ho to... jo text hoti h ..wo textarea ki wo uske value property wle part me hoti h !!
    }
})


// creating a function to generate ticket(box) 

function createTicket(ticketColor,ticketID,ticketTask){
    // console.log(ticketTask.value);
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML =
        `
        <div class="ticket-cont">
            <div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">#${ticketID}</div>
            <div class="task-area">${ticketTask.value}</div>
            <div class="ticket-lock">
                 <i class="fa-solid fa-lock"></i>
            </div>
        </div>
        `
        ;
    mainCont.appendChild(ticketCont);

    //Create object of ticket and add to array
    ticketsArr.push({ticketColor,ticketTask,ticketID});

    handleRemoval(ticketCont);
    handleLock(ticketCont);
    handleColor(ticketCont);
    
}

function handleRemoval(ticket){
    //remove -> if true then remove

    if(removeFlag){
        ticket.remove();
    }

}

function handleLock(ticket){
    let ticketLockELem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockELem.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area");

    ticketLock.addEventListener("click",(e)=>{
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            //lock kar do ..agar unlock kar do
            ticketLock.classList.add(lockClass);
            ticketLock.classList.remove(unlockClass);
            ticketTaskArea.setAttribute("contenteditable","false");
        }
    })
}



function handleColor(ticket){
    let ticketColor = ticket.querySelector(".ticket-color");
    ticketColor.addEventListener("click",(e)=>{
        let currTicketColor = ticketColor.classList[1];
        // get ticket color index
        let currTicketColorInd = colors.findIndex((color)=>{
            return currTicketColor === color;
        }) 

        let newTicketColorInd = (currTicketColorInd+1)%4;
        let newTicketColor = colors[newTicketColorInd];
        ticketColor.classList.remove(currTicketColor);
        ticketColor.classList.add(newTicketColor);
    })
}