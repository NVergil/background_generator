let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

function setGradient() {
        body.style.background =  
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

css.textContent = window.getComputedStyle(body).backgroundImage + ";"
/* console.log(css);
console.log(color1);
console.log(color2);
console.log(bodyGradient); */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomColor1() {
    setGradient()
    color1.value = getRandomColor();
}

function getRandomColor2() {
    setGradient()
    color2.value = getRandomColor();
}

btn1.addEventListener("click", getRandomColor1);
btn2.addEventListener("click", getRandomColor2);