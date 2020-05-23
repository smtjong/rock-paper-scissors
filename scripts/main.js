/* Script for Rock, Paper, Scissors
By Samantha Tjong */

// Declare variables to hold the Player and Computer's scores
let playerScore = 0;
let computerScore = 0;

// Initiate a round of rock, paper, scissors when Player clicks a hand
const btnPlayerRock = document.getElementById('playerRock');
btnPlayerRock.addEventListener('click', playRound);

const btnPlayerPaper = document.getElementById('playerPaper');
btnPlayerPaper.addEventListener('click', playRound);

const btnPlayerScissors = document.getElementById('playerScissors');
btnPlayerScissors.addEventListener('click', playRound);

// Obtain player's input and compare to computer's hand to determine result of the round
function playRound(btn) {
    let playerSelection = convertPlayerInput(this.id);
    let computerSelection = computerPlay();
    console.log(convertPlayerInput(this.id));
    playerSelection == "ROCK" && computerSelection == "ROCK" ? case1()
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

// Convert player's input for playRound() function
function convertPlayerInput(btnId) {
    return btnId == "playerRock" ? "ROCK"
    : btnId == "playerPaper" ? "PAPER"
    : btnId == "playerScissors" ? "SCISSORS"
    : "invalid"
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

// Toggle "on/off" class for Player and Computer's buttons after the click
function toggleBtnState(img) {
    img.classList.remove('off');
    img.classList.add('on');
};

// Detailed functions for the case of each round, feeds into playRound() function
function case1() {
    console.log("Computer played ROCK. Tie.");
    toggleBtnState(document.getElementById('computerRock').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerRock').querySelectorAll('img')[0]);
    document.getElementById('resultText').textContent = "You Tied!";
    modal.style.display = "block";
}

function case2() {
    console.log("Computer played PAPER. You lose.")
    toggleBtnState(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerRock').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
    document.getElementById('resultText').textContent = "You Lose!";
    modal.style.display = "block";
}

function case3() {
    console.log("Computer played SCISSORS. You win.")
    toggleBtnState(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerRock').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
    document.getElementById('resultText').textContent = "You Win!";
    modal.style.display = "block";
}

function case4() {
    console.log("Computer played ROCK. You win.")
    toggleBtnState(document.getElementById('computerRock').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerPaper').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
    document.getElementById('resultText').textContent = "You Win!";
    modal.style.display = "block";
}

function case5() {
    console.log("Computer played PAPER. Tie.")
    toggleBtnState(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerPaper').querySelectorAll('img')[0]);
    document.getElementById('resultText').textContent = "You Tied!";
    modal.style.display = "block";
}

function case6() {
    console.log("Computer played SCISSORS. You lose.")
    toggleBtnState(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerPaper').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
    document.getElementById('resultText').textContent = "You Lose!";
    modal.style.display = "block";
}

function case7() {
    console.log("Computer played ROCK. You lose.")
    toggleBtnState(document.getElementById('computerRock').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerScissors').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
    document.getElementById('resultText').textContent = "You Lose!";
    modal.style.display = "block";
}

function case8() {
    console.log("Computer played PAPER. You win.")
    toggleBtnState(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerScissors').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
    document.getElementById('resultText').textContent = "You Win!";
    modal.style.display = "block";
}

function case9() {
    console.log("Computer played SCISSORS. Tie.")
    toggleBtnState(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    toggleBtnState(document.getElementById('playerScissors').querySelectorAll('img')[0]);
    document.getElementById('resultText').textContent = "You Tied!";
    modal.style.display = "block";
}

function case10() {
    console.log("Invalid response");
}

// Get the Results modal
var modal = document.getElementById("modal");

// Show results and allow player to play another round
const btnTryAgain = document.getElementById('try-again');
btnTryAgain.addEventListener('click', resetStyles);

function resetStyles() {
    modal.style.display = "none";
    imgArr = document.querySelectorAll('img');
    console.log(imgArr);
    for (i=0; i <= imgArr.length; i++) {
        if (imgArr[i].classList.contains('on')) {
            imgArr[i].classList.remove('on');
            imgArr[i].classList.add('off');
        } continue;
    }
};