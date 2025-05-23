const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const doubleZero = document.querySelector(".double-zero");

display.value = "0";

one.addEventListener("click",  () => appendToDisplay("1"));
two.addEventListener("click", () => appendToDisplay("2"));
three.addEventListener("click", () => appendToDisplay("3"));
four.addEventListener("click", () => appendToDisplay("4"));
five.addEventListener("click", () => appendToDisplay("5"));
six.addEventListener("click", () => appendToDisplay("6"));
seven.addEventListener("click", () => appendToDisplay("7"));
eight.addEventListener("click", () => appendToDisplay("8"));
nine.addEventListener("click", () => appendToDisplay("9"));
zero.addEventListener("click", () => appendToDisplay("0"));
decimal.addEventListener("click", () => appendToDisplay("."));
add.addEventListener("click", () => appendToDisplay("+"));
subtract.addEventListener("click", () => appendToDisplay("-"));
multiply.addEventListener("click", () => appendToDisplay("*"));
divide.addEventListener("click", () => appendToDisplay("/"));
equals.addEventListener("click", () => display.value = eval(display.value));
clear.addEventListener("click", () => display.value = "0");
doubleZero.addEventListener("click", () => appendToDisplay("00"));
backspace.addEventListener("click", () => display.value = display.value.slice(0, -1));

window.addEventListener("keydown", (event) => {
    if(event.key >= 0 && event.key <= 9) {
        appendToDisplay(event.key);
    } else if(event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if(event.key === "Enter") {
        display.value = eval(display.value);
    }else if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        appendToDisplay(event.key);
    }
})

function appendToDisplay(value) {
    display.value += value;
}

const icon = document.getElementById("icon");

icon.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.innerHTML = "<button class='theme-button bright'><i class='fa-solid fa-sun'></i></button>";
    }else{
        icon.innerHTML = "<button class='theme-button dark'><i class='fa-solid fa-moon'></i></button>";
    }
})