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
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function playRound(playerSelection, computerSelection) {
    let playerInput = window.prompt("Enter ROCK, PAPER, or SCISSORS.");
    playerSelection = playerInput.toUpperCase();
    computerSelection = computerPlay();
    return playerSelection == "ROCK" && computerSelection == "ROCK" ? 1
    : playerSelection == "ROCK" && computerSelection == "PAPER" ? 2
    : playerSelection == "ROCK" && computerSelection == "SCISSORS" ? 3
    : playerSelection == "PAPER" && computerSelection == "ROCK" ? 4
    : playerSelection == "PAPER" && computerSelection == "PAPER" ? 5
    : playerSelection == "PAPER" && computerSelection == "SCISSORS" ? 6
    : playerSelection == "SCISSORS" && computerSelection == "ROCK" ? 7
    : playerSelection == "SCISSORS" && computerSelection == "PAPER" ? 8
    : playerSelection == "SCISSORS" && computerSelection == "SCISSORS" ? 9
    : 10
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        switch (playRound()) {
            case 1:
                console.log("Computer played ROCK. Tie.")
                break;
            case 2:
                console.log("Computer played PAPER. You lose.");
                computerScore++;
                break;
            case 3:
                console.log("Computer played SCISSORS. You win.");
                playerScore++;
                break;
            case 4:
                console.log("Computer played ROCK. You win.");
                playerScore++;
                break;
            case 5:
                console.log("Computer played PAPER. Tie.");
                break;
            case 6:
                console.log("Computer played SCISSORS. You lose.");
                computerScore++;
                break;
            case 7:
                console.log("Computer played ROCK. You lose.");
                computerScore++;
                break;
            case 8:
                console.log("Computer played PAPER. You win.");
                playerScore++;
                break;
            case 9:
                console.log("Computer played SCISSORS. Tie.");
                break;
            case 10:
                console.log("Invalid response");
                break;
        }
    };
    return computerScore === playerScore ? console.log("It's a tie!!")
    : computerScore > playerScore ? console.log("You lose the game!!")
    : console.log("You win the game!!")
}

game();




