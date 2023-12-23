let score = 0;
let upgrade = 1;
let cheat = -1;
function onCheat(newVal) {
    cheat = newVal
    localStorage.setItem("cheat", cheat.toString())
}
window.onload = function () {
    autocheck = localStorage.getItem("autocheck") ? parseInt(localStorage.getItem("autocheck")) : 0;
    start = localStorage.getItem("start") ? parseInt(localStorage.getItem("start")) : 0;
    autou = localStorage.getItem("autou") ? parseInt(localStorage.getItem("autou")) : 0;
    autoclick = localStorage.getItem("autoclick") ? parseInt(localStorage.getItem("autoclick")) : 0;
    upgrade = localStorage.getItem("upgrade") ? parseInt(localStorage.getItem("upgrade")) : 0;
    score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
    cheat = localStorage.getItem("cheat") ? parseInt(localStorage.getItem("cheat")) : 0;
    // onCheat(cheat)
    document.getElementById("score").innerHTML = (score);
    toohigh();
    auto();
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() == "enter") {
            alert("Stop cheating")
            onCheat(cheat + 1)
        }
    })
    autostopwork();
}
function autostopwork() {
    if (autocheck == 0) {
        stop();
        console.log("Test 1");
        localStorage.setItem("autocheck", autocheck.toString());
    } else if (autocheck == 1) {
        console.log("Test 2");
        localStorage.setItem("autocheck", autocheck.toString());
    }
}
function add() {
    score += upgrade;
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
    toohigh();
    document.getElementById("test2").focus()
    win();
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
        // stop2 = 1
        // stop1 = 1
    }
}
// anticheat functions
function toohigh() {
    if (score >= 100000000000) {
        alert("Cheater!");
        score = upgrade;
        upgrade = 1;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
    }
}
//reset function
function reset() {
    score = 1;
    upgrade = 1;
    autoclick = 1;
    autou = 1;
    localStorage.setItem("autou", autou.toString());
    localStorage.setItem("autoclick", autoclick.toString());
    localStorage.setItem("score", score.toString());
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("upgrade", upgrade.toString());
    stop();
    autostop = 1;
    autocheck = 0;
    localStorage.setItem("autocheck", autocheck.toString());

}
// Upgrade Stuff
function test() {
    alert(upgrade);
}
function upgrade1() {
    if (score >= 100) {
        score -= 100;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        upgrade++;
        localStorage.setItem("upgrade", upgrade.toString());
    }
}
//End goal/Win Condition
function win() {
    if (score >= 200000) {
        alert("You Won!");
        upgrade = 1;
        localStorage.setItem("upgrade", upgrade.toString());
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        stop();
        reset();
    }
}
//other
function htm() {
    alert("Coming Soon")
}
//autoclicker stuff
let autou = 1;
// function autobuy() {
//     if (score >= 1000) {
//         score -= 1000;
//         autoclick++;
//         document.getElementById("score").innerHTML = (score);
//         localStorage.setItem("score", score.toString());
//         auto();
//         localStorage.setItem("autoclick", autoclick.toString());
//         autostop == 2;
//     }
// }
let autocheck = 0;
function abuy() {
    if (score >= 1000) {
        if (autocheck == 0) {
            auto();
            score -= 1000;
            autocheck++;
            localStorage.setItem("autocheck", autocheck.toString());
        } else {
            alert("You can only buy this once");
        }
    }
}
function autoupgrade() {
    if (score >= 10000) {
        score -= 10000;
        autou++;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        localStorage.setItem("autou", autou.toString());
    }
}
let autostop = 1;

function clicker() {
    score += autou;
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
    localStorage.setItem("autou", autou.toString());
}
function auto() {
    autoint = setInterval(clicker, 1000);
}

function stop() {
    clearInterval(autoint);
}