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

// function play(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         console.log("TIE")
//     } elseif (playerSelection == 1 && computerSelection == )
// }

