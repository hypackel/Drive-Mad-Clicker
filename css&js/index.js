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
}

function bypass() {
    score = prompt("What do you want your score to be?");
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
}

function toohigh() {
    if (score >= 100000000000000000) {
       alert("Did you cheat?");
       score = 0;
       document.getElementById("score").innerHTML = (score);
       localStorage.setItem("score", score.toString());
    }
}