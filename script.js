let addbtn = document.querySelector(".add-btn");
let modelCont = document.querySelector(".model-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let colors = ["lightpink","lightblue","lightgreen","black"];
let modelPriorityColor = colors[colors.length-1];
let allPriorityColors = document.querySelectorAll(".priority-color");

let addFlag = false;

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
let removebtn = document.querySelector(".remove-btn");

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
    
}

