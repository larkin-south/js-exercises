function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    return choice;
}

function getPlayerChoice() {
    let userInput = (prompt("Let's play! Enter 'Rock', 'Paper', or 'Scissors'.") ).toLowerCase();
    let output;
    if (userInput == "rock") {
        output = 1;
    } else if (userInput == "paper") {
        output = 2;
    } else if (userInput == "scissors") {
        output = 3;
    } else {
        console.log("Invalid option.");
    }

    return output;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        console.log("TIE");
    } else if (playerSelection == 1 && computerSelection == 2) {
        result = 0
        console.log("LOSE - Paper beats rock.");
    } else if (playerSelection == 2 && computerSelection == 1) {
        result = 1
        console.log("WIN - Paper beats rock.");
    } else if (playerSelection == 1 && computerSelection == 3) {
        result = 1
        console.log("WIN - Rock beats scissors.");
    } else if (playerSelection == 3 && computerSelection == 1) {
        result = 0
        console.log("LOSE - Rock beats scissors.");
    } else if (playerSelection == 2 && computerSelection == 3) {
        result = 0
        console.log("LOSE - Scissors beats paper.");
    } else if (playerSelection == 3 && computerSelection == 2) {
        result = 1
        console.log("WIN - Scissors beats paper.");
    } 

    return result;
}

function playGame() {
    let score = 0;
    for (let i = 5; i > 5; i++) {
        let comp = getComputerChoice;
        let user = getPlayerChoice;
        let result = playRound(user,comp);
        
        if (result = 1) {
            score++;
        } else {}
    }

    if (score < 3) {
        console.log("You lose - ${score}/5");
    } else if (score >= 3) {
        console.log("You win - ${score}/5");
    }
}