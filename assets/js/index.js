let score = 1;
let upgrade = 1;
let cheat = -1;
function onCheat(newVal) {
    cheat = newVal
    localStorage.setItem("cheat", cheat.toString())
}
window.onload = function () {
    t2 = localStorage.getItem("t2") ? parseInt(localStorage.getItem("t2")) : 0;
    t2check = localStorage.getItem("t2check") ? parseInt(localStorage.getItem("t2check")) : 0;
    acheve2 = localStorage.getItem("acheve2") ? parseInt(localStorage.getItem("acheve2")) : 0;
    acheve1 = localStorage.getItem("acheve1") ? parseInt(localStorage.getItem("acheve1")) : 0;
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
    // achevement();
    T2Auto()
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
    document.getElementById("bonk").play();
    score += upgrade;
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("score", score.toString());
    document.getElementById("test2").focus()
    toohigh();
    win();
    temp();
}



// function temp() {
//     alert("You have " + (score) + " points!");
// }



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
    acheve1 = 1;
    acheve2 = 1;
    score = 1;
    upgrade = 1;
    autoclick = 1;
    autou = 1;
    localStorage.setItem("acheve2", acheve2.toString());
    localStorage.setItem("acheve1", acheve1.toString());
    localStorage.setItem("autou", autou.toString());
    localStorage.setItem("autoclick", autoclick.toString());
    localStorage.setItem("score", score.toString());
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("upgrade", upgrade.toString());
    stop();
    console.log("Game Reset");
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
    if (score >= "50000000" && NoWin == "1") {
        alert("You Won!");
        score -= upgrade;
        localStorage.setItem("upgrade", upgrade.toString());
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
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

  localStorage.setItem(
    "score", score.toString(),
    "autou", autou.toString()
  );

  document.getElementById("score").innerHTML = score;
}
let scoreEl = document.getElementById("score");

function auto() {
    autoint = setInterval(clicker, 1000);
}

function stop() {
    clearInterval(autoint);

}
//Tier 2 autoclick system
// let t2 = 0;
// function Clicker2() {
//     score += 50;
  
//     localStorage.setItem(
//       "score", score.toString(),
//     );
  
//     document.getElementById("score").innerHTML = score;
//   }
//   let scoreET = document.getElementById("score");
  
//   function T2Auto() {
//     if (t2 == 1)
//       T2auto = setInterval(Clicker2, 1000);
//   }
  
//   function T2Stop() {
//       clearInterval(T2auto);
//   }

// function test3() {
//     alert(t2);
// }

//   let t2check = 0;
//   function abuyT2() {
//     if (score >= 50000) {
//         if (t2check == 0) {
//             t2++;
//             t2check = 1;
//             T2Auto();
//             score -= 50000;
//             localStorage.setItem(
//                 "score", score.toString(),
//                 "t2check", t2check.toString(),
//                 "t2", t2.toString(),
//               );
//         } else {    
//             alert("Test");
//         }
//     }
// }

//Alert/Achevement System
let acheve1 = 1;
let acheve2 = 1;

function Achevements() {
    Acheve1();
    Acheve2();
}

function Acheve1() {
    if (score >= 1000) {
        if (acheve1 == 1) {
            showAlert();
            document.getElementById("alert-content").innerHTML = ("Achevement Gained: 1000 Clicks");
            score += 100;
            document.getElementById("score").innerHTML = (score);
            localStorage.setItem("score", score.toString());
            acheve1 += 1;
            localStorage.setItem("acheve1", acheve1.toString());
            console.log("Achevement 1 gained");
        }
    }
}
function Acheve2() {
    if (autocheck >= 1) {
        if (acheve2 == 1) {
            showAlert();
            document.getElementById("alert-content").innerHTML = ("Achevement Gained: Buy an Autoclicker");
            score += 100;
            document.getElementById("score").innerHTML = (score);
            localStorage.setItem("score", score.toString());
            acheve2 += 1;
            localStorage.setItem("acheve2", acheve2.toString());
            console.log("Achevement 2 gained");
        }
    }
}

// function settings()
// {
//  var ddl = document.getElementById("difficulty");
//  var selectedValue = ddl.options[ddl.selectedIndex].value;
//     if (selectedValue == "Normal")
//    {
//     alert("Normal");
//    } else if (selectedValue == "Easy") {
//     alert("Easy");
//    } else if (selectedValue == "Hard") {
//     alert("Hard");
//    }
// }

//No Idea
function showAlert() {
    var modal = document.getElementById('customAlert');
    modal.style.display = 'block';
}

function closeAlert() {
    var modal = document.getElementById('customAlert');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('customAlert');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
let pinthingy
// function devtest() {
//     if (pinthingy == 1234) {
//         devwork();
//     } else {
//         pinthingy = prompt("What is the Pin?");
//         devwork();
//     }
// }

function devwork() {
        score += 10000;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
}
// function to detect if it is the players first time playing
// if (start == 0) {
//     alert("Welcome to Clicker Game! Click OK to continue");
//     start = 1;
//     localStorage.setItem("start", start.toString());
// }

// function UserLogin() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (username == "Dev1" && password == "1234") {
//         alert("Dev Mode Enabled!");
//         pinthingy = 1234;
//         clearFields();
//     } else {
//         alert("Wrong Username or Password");
//         clearFields();
//     }
// }

function clearFields() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

function UpgradeChange() {
        let UpgradeChange = prompt("What do you want your upgrade to be?");
        upgrade = UpgradeChange;
        // localStorage.setItem("upgrade", upgrade.toString());
        localStorage.setItem("upgrade", upgrade.toString());
        location.reload();
}

function AutoUpgradeChange() {
        let change = prompt("What do you want your autoclicker upgrade to be?");
        autou = change;
        stop();
        localStorage.setItem("autou", autou.toString());
        location.reload();
        auto();
}

// let NoWin = 1
// function disableWin() {
//     if ( pinthingy == 1234) {
//         NoWin = 2;
//         alert("Winning Has Been Temporarily Disabled");
//     }
// }

//Daily Missions/Missions
// function missions() {

// }

//Example Code
// if (acheve2 == 1) {
//     showAlert();
//     document.getElementById("alert-content").innerHTML = ("Achevement Gained: Buy an Autoclicker");
//     score += 100;
//     document.getElementById("score").innerHTML = (score);
//     localStorage.setItem("score", score.toString());
//     acheve2 += 1;
//     localStorage.setItem("acheve2", acheve2.toString());
//     console.log("Achevement 2 gained");
// }