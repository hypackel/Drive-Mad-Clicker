let score = 0;

window.onload = function () {
    score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")): 0 
    document.getElementById("score").innerHTML = (score);
    toohigh();
}
function add(){
    score++;
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
    toohigh();
}
let pin 
function bypass() {
    let pin = prompt("What is the pin?");
    if (pin == 1234) {
        score = prompt("What do you want your score to be?");
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        toohigh()
    } else {
        alert("No cheating!");
        score = 1
        document.getElementById("score").innerHTML = (score);
        toohigh()
    }
}

// anticheat function
function toohigh() {
    if (score >= 100000000000000000000000000000000000000) {
       alert("Cheater!");
       score = 0;
       document.getElementById("score").innerHTML = (score);
       localStorage.setItem("score", score.toString());
    }
}