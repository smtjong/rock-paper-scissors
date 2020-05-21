// document.addEventListener("DOMContentLoaded", game);

const btnPlayerRock = document.getElementById('playerRock');
btnPlayerRock.addEventListener('click', playRound);

const btnPlayerPaper = document.getElementById('playerPaper');
btnPlayerPaper.addEventListener('click', playRound);

const btnPlayerScissors = document.getElementById('playerScissors');
btnPlayerScissors.addEventListener('click', playRound);

let playerScore = 0;
let computerScore = 0;

//Obtain player's input and compare to computer's hand to determine outcome of the round
function playRound(btn) {
    let playerSelection = convertPlayerInput(btn.target.id);
    let computerSelection = computerPlay();
    return playerSelection == "ROCK" && computerSelection == "ROCK" ? case1()
    : playerSelection == "ROCK" && computerSelection == "PAPER" ? case2()
    : playerSelection == "ROCK" && computerSelection == "SCISSORS" ? case3()
    : playerSelection == "PAPER" && computerSelection == "ROCK" ? case4()
    : playerSelection == "PAPER" && computerSelection == "PAPER" ? case5()
    : playerSelection == "PAPER" && computerSelection == "SCISSORS" ? case6()
    : playerSelection == "SCISSORS" && computerSelection == "ROCK" ? case7()
    : playerSelection == "SCISSORS" && computerSelection == "PAPER" ? case8()
    : playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ? case9()
    : case10()
};

function convertPlayerInput(btnId) {
    return btnId == "playerRock" ? "ROCK"
    : btnId == "playerPaper" ? "PAPER"
    : "SCISSORS"
}

function case1() {
    console.log("Computer played ROCK. Tie.");
    document.getElementById('computerRock').style.background = "red";
}

function case2() {
    console.log("Computer played PAPER. You lose.")
    document.getElementById('computerPaper').style.background = "red";
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case3() {
    console.log("Computer played SCISSORS. You win.")
    document.getElementById('computerScissors').style.background = "red";
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case4() {
    console.log("Computer played ROCK. You win.")
    document.getElementById('computerRock').style.background = "red";
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case5() {
    console.log("Computer played PAPER. Tie.")
    document.getElementById('computerPaper').style.background = "red";
}

function case6() {
    console.log("Computer played SCISSORS. You lose.")
    document.getElementById('computerScissors').style.background = "red";
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case7() {
    console.log("Computer played ROCK. You lose.")
    document.getElementById('computerRock').style.background = "red";
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case8() {
    console.log("Computer played PAPER. You win.")
    document.getElementById('computerPaper').style.background = "red";
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case9() {
    console.log("Computer played SCISSORS. Tie.")
    document.getElementById('computerScissors').style.background = "red";
}

function case10() {
    console.log("Invalid response");
}

//Generate random integer to feed into computer's hand
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
};

//Generate computer's hand by translating randomly generated integer into rock, paper, or scissors
function computerPlay() {
    switch (getRandomInt(1, 4)) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    };
};