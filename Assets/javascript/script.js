let counter = 0;

const title = document.createElement("h1");
title.className = "titleH1" ;
title.innerHTML = "Zen Counter";
document.body.appendChild(title);

const result = document.createElement("div");
result.className = "resultBox";
result.innerHTML = counter;
document.body.appendChild(result);


const decBtn = document.createElement("button");
decBtn.className = "decrementBtn";
decBtn.innerHTML = "-";
decBtn.addEventListener("click", () => {
    counter--;
    result.innerHTML = counter;
});
document.body.append(decBtn);


const resBtn = document.createElement("button");
resBtn.className = "resetBtn";
resBtn.innerHTML = "Reset";
resBtn.addEventListener("click", () =>{
    counter = 0;
    result.innerHTML = counter;
});
document.body.appendChild(resBtn);



const incBtn = document.createElement("button");
incBtn.className = "incrementBtn";
incBtn.innerHTML = "+";
incBtn.addEventListener("click", () =>{
    counter++;
    result.innerHTML = counter;
});
document.body.appendChild (incBtn);


const tipMessage = [
    "Hi! Are you a little stressed? Don't worry everything will be okay.",
    "Focus on one thing at a time, you don't have to everything at one.",
    "This moment will pass too, have faith.",
    "You don't have to be perfect, just do your best."
];


let tipIndex = 0;

function tipDiv() {
    const msgDiv = document.createElement("div");
    msgDiv.id = "message";
    msgDiv.style.display = "none";
    document.body.appendChild(msgDiv);
    return msgDiv;
}

function showHideAutomatic () {
    const div = document.getElementById("message");

    if(div.style.display === "none"|| div.style.display ===""){
        div.style.display = "block";
        div.innerHTML = tipMessage[tipIndex];
        tipIndex = (tipIndex + 1) % tipMessage.length;
    } else{
        div.style.display ="none";
    }
}

const loadpage = tipDiv();

setInterval(showHideAutomatic,10000);