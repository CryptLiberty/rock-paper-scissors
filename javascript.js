function rockPaperScissors(handSign) {
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

    //////// Coverts string to lower case and then Capitalize the first character, and re-adding the rest of the string
    handSign = handSign.toLowerCase()
    handSign = handSign.charAt(0).toUpperCase() + handSign.slice(1)
    ////////

    // Actual 'Game' portion, does a series of if statements to determine if the player won or loss.
    if (handSign !== "Rock" && handSign !== "Paper" && handSign !== "Scissors") {
        return `Error! ${handSign} is an invalid input!`
    }else if (handSign === "Rock" && ai === "Scissors") {
        return `You win! You chose ${handSign}. And the AI chose ${ai}.`
    }else if (handSign === "Paper" && ai === "Rock") {
        return `You win! You chose ${handSign}. And the AI chose ${ai}.`
    } else if (handSign === "Scissors" && ai === "Paper") {
     return `You win! You chose ${handSign}. And the AI chose ${ai}.`
    } else if (handSign === ai) {
        return `Its a tie! You chose ${handSign}. And the AI chose ${ai}.`
    }else {
        return `"You lose! You chose ${handSign}. And the AI chose ${ai}.`
    }
}

console.log(rockPaperScissors("rOck"))