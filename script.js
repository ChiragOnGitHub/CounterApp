let counterValue=document.querySelector("#counter");
// if increment and decrement function changes content of this itself

function decrement(){
    let v=parseInt(counterValue.innerText);
    v=v-1;
    counterValue.innerText=v;
};

function increment(){
    let v=parseInt( counterValue.innerText);
    v=v+1;
    counterValue.innerText=v;
};