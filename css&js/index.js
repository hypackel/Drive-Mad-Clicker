let score = 0;
let upgrade = 1;

window.onload = function () {
    score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")): 0;
    document.getElementById("score").innerHTML = (score);
    toohigh();
}
function add(){
        score+=upgrade;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        toohigh();
        work();
        checker();
}
let pin 
function bypass() {
    let pin = prompt("What is the pin?");
    if (pin == 1234) {
        score = prompt("What do you want your score to be?");
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        toohigh();
    } else {
        alert("No cheating!");
        score = 1;
        upgrade = 1;
        document.getElementById("score").innerHTML = (score);
        stop2 = 1
        stop1 = 1
    }
}
// anticheat functions
function toohigh() {
    if (score >= 10000) {
       alert("Cheater!");
       score = 0;
       upgrade = 1;
       document.getElementById("score").innerHTML = (score);
       localStorage.setItem("score", score.toString());
    }
}
function reset() {
    score = 1;
    upgrade = 1;
    localStorage.setItem("score", score.toString());
    document.getElementById("score").innerHTML = (score);
    stop2 = 1
    stop1 = 1
}
// Upgrade Stuff
function test() {
    alert(upgrade);
}
let stop1 = 1
let stop2 = 1
let stop3 = 1
let stop4 = 1
function work() {
    if (score >= 50) {
        if (stop1 == 1) {
            upgrade++;
            stop1++;
        }
    }
    if (score >= 100) {
        if (stop2 == 1) {
            upgrade++;
            stop2++;
        }
    }
    if (score >= 150) {
        if (stop3 == 1) {
            upgrade++;
            stop3++;
        }
    }
    if (score >= 200) {
        if (stop4 == 1) {
            upgrade++;
            stop4++;
        }
    }
}