let computerSelection = () => {
    // A Random number generator with a switch statement to assign the random number to a word.
    let ai = Math.floor(Math.random() * 3);
    switch (ai) {
        case 0:
            ai = "Rock"
            break;
        case 1:
            ai = "Paper"
            break;
        case 2:
            ai = "Scissors"
            break;    
    }
    return ai
};

//////// Coverts string to lower case and then Capitalize the first character, and re-adding the rest of the string
let playerSelection = () => {
    userInput = prompt("What is your choice?\nRock, Paper, Or Scissors", "")
    userInput = userInput.toLowerCase()
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1)
    return userInput
};

function playGame(playerSelection, computerSelection) {
       // Actual 'Game' portion, does a series of if statements to determine if the player won or loss.
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return `Error! ${playerSelection} is an invalid input!`
    }else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You win! You chose ${playerSelection}. And the AI chose ${computerSelection}.`
    }else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You win! You chose ${playerSelection}. And the AI chose ${computerSelection}.`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
     return `You win! You chose ${playerSelection}. And the AI chose ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `Its a tie! You chose ${playerSelection}. And the AI chose ${computerSelection}.`
    }else {
        return `"You lose! You chose ${playerSelection}. And the AI chose ${computerSelection}.`
    }
}

alert(playGame(playerSelection(), computerSelection()))