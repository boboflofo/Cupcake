window.onload = function() {
let light = document.querySelector(".light-mode");
    light.onclick = function() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }


let dark = document.querySelector(".dark-mode");
dark.onclick = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

let increase = document.querySelector(".increase");
    increase.onclick = function() {
    document.body.style.fontSize = "50px";
    }


let decrease = document.querySelector(".decrease");
    decrease.onclick = function() {
    document.body.style.fontSize = "15px";
}


let h1 = document.querySelector("h1");
    h1.onmouseover = function() {
    h1.style.backgroundColor = "yellow";
    
}

    h1.onmouseout = function() {
    h1.style.backgroundColor = randomBackgroundColor;
    }

let body = document.body;
        body.onmouseover = function() {
            body.style.backgroundColor = randomBackgroundColor;
        }

    body.onmouseout = function() {
        body.style.backgroundColor = randomBackgroundColor2;
    }

const randomBackgroundColor = getRandomColor();
const randomBackgroundColor2 = getRandomColor();

function getRandomInt(min, max) {
    // min and max are inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);
    return `rgb(${red},${green},${blue})`;
}
}