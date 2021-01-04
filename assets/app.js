var userGuess = document.getElementById("user-guess");
var cpuGuess = document.getElementById("cpu-guess");
var userResult = document.getElementById("result");
var userName = document.getElementById("user-name");
var wrapper = document.getElementById("wrapper");
var resetScore = document.getElementById("reset");
var play = document.getElementById("play");
var rpsArray = ["r", "p", "s"];

play.onclick = function (event) {
    var hasName = prompt("What's your name?")
    if (hasName === "") {
        alert("Please enter in a name!")
    }
    else if (!hasName) {
        return
    }
    else {
        userName.innerText = hasName
        play.style.display = "none";
        wrapper.style.display = "block";
    }
}

let win = 0
let loss = 0
let tie = 0

document.getElementById("win").innerText = win;
document.getElementById("loss").innerText = loss;
document.getElementById("tie").innerText = tie;

resetScore.onclick = function (event) {
    event.preventDefault();
    win = 0
    loss = 0
    tie = 0
    document.getElementById("win").innerText = win;
    document.getElementById("loss").innerText = loss;
    document.getElementById("tie").innerText = tie;
    userGuess.innerText = "";
    cpuGuess.innerText = "";
    userResult.innerText = "";
}

document.onkeyup = function (event) {
    var userInput = event.key.toLocaleLowerCase();
    var cpuPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    cpuGuess.innerText = "";
    userResult.innerText = "";
    cpuGuess.innerText = "Hmm.."

    //User & CPU picker Logic
    if (userInput === "r") {
        userGuess.innerText = "Rock!";
    }
    else if (userInput === "p") {
        userGuess.innerText = "Paper!";
    }
    else if (userInput === "s") {
        userGuess.innerText = "Scissors!";
    }
    else {
        userGuess.innerText = "Invalid Input! Type r, p, or s!";
        cpuGuess.innerText = "";
        return
    }
    console.log("User Guess: " + userGuess.innerText);

    if (cpuPick === "r") {
        setTimeout(function () {
            cpuGuess.innerText = "Rock!";
        }, 2000)
    }
    else if (cpuPick === "p") {
        setTimeout(function () {
            cpuGuess.innerText = "Paper!";
        }, 2000)
    }
    else if (cpuPick === "s") {
        setTimeout(function () {
            cpuGuess.innerText = "Scissors!";
        }, 2000)
    }
    else { }

    // Win Lose Logic
    if (userInput === "r" && cpuPick === "s") {
        setTimeout(function () {
            userResult.innerText = "You Won!";
        }, 2500)
        win++
        setTimeout(function () {
            document.getElementById("win").innerText = win;
        }, 3000)
    }
    else if (userInput === "r" && cpuPick === "p") {
        setTimeout(function () {
            userResult.innerText = "You Lost!";
        }, 2500)
        loss++
        setTimeout(function () {
            document.getElementById("loss").innerText = loss;
        }, 3000)
    }
    else if (userInput === "r" && cpuPick === "r") {
        setTimeout(function () {
            userResult.innerText = "Its a Tie!";
        }, 2500)
        tie++
        setTimeout(function () {
            document.getElementById("tie").innerText = tie;
        }, 3000)
    }

    if (userInput === "p" && cpuPick === "r") {
        setTimeout(function () {
            userResult.innerText = "You Won!";
        }, 2500)
        win++
        setTimeout(function () {
            document.getElementById("win").innerText = win;
        }, 3000)
    }
    else if (userInput === "p" && cpuPick === "s") {
        setTimeout(function () {
            userResult.innerText = "You Lost!";
        }, 2500)
        loss++
        setTimeout(function () {
            document.getElementById("loss").innerText = loss;
        }, 3000)
    }
    else if (userInput === "p" && cpuPick === "p") {
        setTimeout(function () {
            userResult.innerText = "Its a Tie!";
        }, 2500)
        tie++
        setTimeout(function () {
            document.getElementById("tie").innerText = tie;
        }, 3000)
    }

    if (userInput === "s" && cpuPick === "p") {
        setTimeout(function () {
            userResult.innerText = "You Won!";
        }, 2500)
        win++
        setTimeout(function () {
            document.getElementById("win").innerText = win;
        }, 3000)
    }
    else if (userInput === "s" && cpuPick === "r") {
        setTimeout(function () {
            userResult.innerText = "You Lost!";
        }, 2500)
        loss++
        setTimeout(function () {
            document.getElementById("loss").innerText = loss;
        }, 3000)
    }
    else if (userInput === "s" && cpuPick === "s") {
        setTimeout(function () {
            userResult.innerText = "Its a Tie!";
        }, 2500)
        tie++
        setTimeout(function () {
            document.getElementById("tie").innerText = tie;
        }, 3000)
    }
}