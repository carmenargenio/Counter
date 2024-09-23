let counter = 0;

const title = document.createElement("h1");
title.className = "titleH1" ;
title.innerHTML = "Counter";
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
