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

let playGame = (playerSelection, computerSelection) => {
       // Actual 'Game' portion, does a series of if statements to determine if the player won or loss.
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return 4
    }else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 1
    }else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 1
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
     return 1
    } else if (playerSelection = computerSelection) {
        return 2
    }else {
        return 3
    };
}


function game() {
    let playerScore = 0
    let computerScore = 0
    let loopNumber = 0
    while (loopNumber < 5){
        console.log(loopNumber)
        let playerChoice = playerSelection()
        let computerChoice = computerSelection()
        let gameResult = playGame(playerChoice, computerChoice)
        if (gameResult == 1) {
            playerScore++
            alert(`YOU WON! The Computer chose ${computerChoice}, and you chose ${playerChoice}.\nCurrent Score: Player Score:${playerScore} Computer Score:${computerScore}`)
        }else if (gameResult == 3) {
            computerScore++
            alert(`YOU LOST! The Computer chose ${computerChoice}, and you chose ${playerChoice}.\nCurrent Score: Player Score:${playerScore} Computer Score:${computerScore}`)
            
        }else if (gameResult == 2) {
            alert(`Alert! You both chose ${playerChoice}, resulting in a TIE. Restarting round.`)
            continue;

        }else if (gameResult == 4) {
            alert(`Error! ${playerChoice} is an invalid selection! Aborting game.`)
            break;
        }
        loopNumber++
    }
    if (playerScore > computerScore) {
        alert(`YOU WON! Your score of ${playerScore} is higher than the computer's score of ${computerScore}`)
    }else if (playerScore < computerScore) {
        alert(`YOU LOST! Your score of ${playerScore} is lower than the computer's score of ${computerScore}`)
    }else {
        alert(`Error, game was no longer able to continue due to an error.`)
    }
}

game()