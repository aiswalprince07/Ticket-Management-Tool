let addbtn = document.querySelector(".add-btn");
let modelCont = document.querySelector(".model-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let addFlag = false;
addbtn.addEventListener("click",(e)=>{
    //Display Model
    
    //Generate ticket


    //addFlag -> true ==>Model Display otherwise no
    addFlag = !addFlag;
    if(addFlag){
        modelCont.style.display = "flex";
    }else{
        modelCont.style.display = "none";   
    }

})
let removebtn = document.querySelector(".remove-btn");
removebtn.addEventListener("click",(e)=>{
    // console.log("clicked");

})

modelCont.addEventListener("keydown",(e)=>{
    let key = e.key;
    console.log(key);
    if(key === "Shift"){         //Shift me....S captial always
        createTicket();
        modelCont.style.display = "none";    //box ko dikhna ho to flex, agar nhi to 'none';
        addFlag =false; 
        textAreaCont.value="";   // textArea me agar content erase karke phir box lana ho to... jo text hoti h ..wo textarea ki wo uske value property wle part me hoti h !!
    }
})


// creating a function to generate ticket(box) 

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML =
        `
            <div class="ticket-cont">
                <div class="ticket-color"></div>
                <div class="ticket-id">#sample_id</div>
                <div class="task-area">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nulla temporibus qui amet nobis rerum!</div>
            </div>
        `
        ;
    mainCont.appendChild(ticketCont);
    
}

