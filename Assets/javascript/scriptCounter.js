function createElement (tagName,className,innerHTML,dataAction) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (innerHTML !==undefined) element.innerHTML = innerHTML;
    if(dataAction) element.setAttribute("data-action", dataAction)
    return element;
}

//main elements
let counter = 0;

let container = createElement ("div", "", "");

//title
let title = createElement ("h1", "title-h1", "Zen Counter");
container.appendChild(title);

//display counter
let resultBox = createElement ("div", "result-Box", counter);
container.appendChild(resultBox);

//buttons
let buttonCont = createElement ("div","","");


let decBtn = createElement("button", "decrement-btn","-","decrement");
let resBtn = createElement("button", "reset-btn","Reset","reset");
let incBtn = createElement("button", "increment-btn","+","increment"); 

buttonCont.appendChild(decBtn);
buttonCont.appendChild(resBtn);
buttonCont.appendChild(incBtn);

container.appendChild(buttonCont); 

//added to the body
document.body.appendChild(container);

//update counter value
resultBox.innerHTML = counter;

buttonCont.addEventListener("click", (event) =>{
    const action = event.target.getAttribute("data-action");

    if (action === "increment"){
        counter++;
    }else if(action === "reset"){
        counter = 0;
    }else if(action === "decrement"){
        counter--;
    }
    resultBox.innerHTML = counter;
});
