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
        result = "TIE";
    } else if (playerSelection == 1 && computerSelection == 2) {
        result = "LOSE - Paper beats rock.";
    } else if (playerSelection == 2 && computerSelection == 1) {
        result = "WIN - Paper beats rock.";
    } else if (playerSelection == 1 && computerSelection == 3) {
        result = "WIN - Rock beats scissors.";
    } else if (playerSelection == 3 && computerSelection == 1) {
        result = "LOSE - Rock beats scissors.";
    } else if (playerSelection == 2 && computerSelection == 3) {
        result = "LOSE - Scissors beats paper.";
    } else if (playerSelection == 3 && computerSelection == 2) {
        result = "WIN - Scissors beats paper.";
    } 

    return result;
}

