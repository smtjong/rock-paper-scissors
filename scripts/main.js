
const btnTryAgain = document.getElementById('try-again');
btnTryAgain.addEventListener('click', resetStyles);

function resetStyles() {
    imgArr = document.querySelectorAll('img');
    console.log(imgArr);
    for (i=0; i <= imgArr.length; i++) {
        if (imgArr[i].classList.contains('on')) {
            imgArr[i].classList.remove('on');
            imgArr[i].classList.add('off');
        } continue;
    }
}

// document.addEventListener("DOMContentLoaded", game);

const btnPlayerRock = document.getElementById('playerRock');
btnPlayerRock.addEventListener('click', playRound);

const btnPlayerPaper = document.getElementById('playerPaper');
btnPlayerPaper.addEventListener('click', playRound);

const btnPlayerScissors = document.getElementById('playerScissors');
btnPlayerScissors.addEventListener('click', playRound);

let playerScore = 0;
let computerScore = 0;

let playerSelection

//Obtain player's input and compare to computer's hand to determine outcome of the round
function playRound(btn) {
    playerSelection = convertPlayerInput(this.id);
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

function convertPlayerInput(btnId) {
    return btnId == "playerRock" ? "ROCK"
    : btnId == "playerPaper" ? "PAPER"
    : btnId == "playerScissors" ? "SCISSORS"
    : "invalid"
}

function modifyComputerGraphic(img) {
    img.classList.remove('off');
    img.classList.add('on');
};

function case1() {
    console.log("Computer played ROCK. Tie.");
    modifyComputerGraphic(document.getElementById('computerRock').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerRock').querySelectorAll('img')[0]);
}

function case2() {
    console.log("Computer played PAPER. You lose.")
    modifyComputerGraphic(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerRock').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case3() {
    console.log("Computer played SCISSORS. You win.")
    modifyComputerGraphic(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerRock').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case4() {
    console.log("Computer played ROCK. You win.")
    modifyComputerGraphic(document.getElementById('computerRock').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerPaper').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case5() {
    console.log("Computer played PAPER. Tie.")
    modifyComputerGraphic(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerPaper').querySelectorAll('img')[0]);
}

function case6() {
    console.log("Computer played SCISSORS. You lose.")
    modifyComputerGraphic(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerPaper').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case7() {
    console.log("Computer played ROCK. You lose.")
    modifyComputerGraphic(document.getElementById('computerRock').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerScissors').querySelectorAll('img')[0]);
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore.toString();
}

function case8() {
    console.log("Computer played PAPER. You win.")
    modifyComputerGraphic(document.getElementById('computerPaper').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerScissors').querySelectorAll('img')[0]);
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore.toString();
}

function case9() {
    console.log("Computer played SCISSORS. Tie.")
    modifyComputerGraphic(document.getElementById('computerScissors').querySelectorAll('img')[0]);
    modifyComputerGraphic(document.getElementById('playerScissors').querySelectorAll('img')[0]);
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