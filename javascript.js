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
        return 3
    }else {
        return 2
    };
}


function game() {
    // sets the playerScore and computerScore before execution.
    let playerScore = 0
    let computerScore = 0
    //
    let loopNumber = 0  // Main loopNumber so the game keeps going until it hits 5
    while (loopNumber < 5){
        // console.log(loopNumber) // remove the comment lines at the beginning to troubleshoot.

        let playerChoice = playerSelection() // Calls playerSelection and sets the return value to playerChoice.
        let computerChoice = computerSelection() // Calls computerSelection and sets the return value to ComputerChoice.

        let gameResult = playGame(playerChoice, computerChoice) // Calls the playGame function with the values of playerChoice and computerChoice
        if (gameResult == 1) { // 1 is a win condition coming from playGame
            playerScore++
            alert(`YOU WON! The Computer chose ${computerChoice}, and you chose ${playerChoice}.\nCurrent Score: Player Score:${playerScore} Computer Score:${computerScore}`)
        }else if (gameResult == 2) { // 2 is a lose condition coming from playGame (why did I set lose to 3?)
            computerScore++
            alert(`YOU LOST! The Computer chose ${computerChoice}, and you chose ${playerChoice}.\nCurrent Score: Player Score:${playerScore} Computer Score:${computerScore}`)
            
        }else if (gameResult == 3) { // 3 is the Tie Condition
            alert(`Alert! You both chose ${playerChoice}, resulting in a TIE. Restarting round.`)
            continue;

        }else if (gameResult == 4) { // 4 spews out an error if the user types in something other than the given options and then breaks out of the loop.
            alert(`Error! ${playerChoice} is an invalid selection! Aborting game.`)
            break;
        }
        loopNumber++
    }

    // These if statements determin if your score is higher or lower than the computer's score at the end of 5 rounds.
    if (playerScore > computerScore) {
        alert(`YOU WON! Your score of ${playerScore} is higher than the computer's score of ${computerScore}`)
    }else if (playerScore < computerScore) {
        alert(`YOU LOST! Your score of ${playerScore} is lower than the computer's score of ${computerScore}`)
    }else {
        alert(`Error, game was no longer able to continue due to an error.`) // either the user typed in an invalid option, or something has gone wrong.
    }
}

game()