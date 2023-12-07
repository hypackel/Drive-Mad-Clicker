let score = 0;

window.onload = function () {
    score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")): 0 
    document.getElementById("score").innerHTML = (score);
}
function add(){
    score++;
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
}