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