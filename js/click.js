var counter = 0;

function onClickBtn(el){
    counter++;
    el.innerHTML = "Вы нажали  на кнопку: " + counter;
    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}

function onInput(el){
    if(el.value == "Hello")
        alert("И тебе привет!");
    console.log(el.value);
}