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
    h1.style.backgroundColor = "white";
}
}


    // let h1MouseOut = document.querySelector("h1");
    //     h1.onmouseout = function() {
    //     h1.style. backgroundColor = "white";
    //     }

//     let h1 = document.querySelector("h1");
//         h1.onmouseover = function() {
//         window.alert("I am a heading element.");
// };

// document.querySelector(".light-mode").onclick = light()

// button.className = "light-mode" 