let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    if (value === 0){
        value = "Rock";
    }
    else if (value === 1){
        value = "Paper";
    }
    else if (value === 2)
    {
        value = "Scissors";
    }
    return value;
}

//console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("What is your choice human?: ")
    return humanChoice;
}
//console.log(getHumanChoice());




// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
//     if (humanChoice === "Rock" && computerChoice === "Scissors"){
//         console.log("You win! Rock beats Scissors");
//         humanScore += 1;
//     }
//     if (humanChoice === "Rock" && computerChoice === "Paper"){
//         console.log("You lose! Paper beat Rock");
//         computerScore += 1;
//     }
//     if (humanChoice === "Paper" && computerChoice === "Scissors"){
//         console.log("You lose! Scissors beat Paper");
//         computerScore += 1;
//     }
//     if (humanChoice === "Paper" && computerChoice === "Rock"){
//         console.log("You win! Paper beat Rock");
//         humanScore += 1;
//     }
//     if (humanChoice === "Scissors" && computerChoice === "Rock"){
//         console.log("You lose! Rock beat Scissors");
//         computerScore += 1;
//     }
//     if (humanChoice === "Scissors" && computerChoice === "Paper"){
//         console.log("You win! Scissors beat Paper");
//         humanScore += 1;
//     }
//     if (humanChoice === computerChoice)
//     {
//         console.log("It's a tie");
//     }
//     console.log(`Human choice is: ${humanChoice}`);
//     console.log(`Computer choice is: ${computerChoice}`);
//     return humanScore, computerScore;
    
// }

//playRound(humanSelection, computerSelection);

function playGame(){

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
        if (humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore += 1;
        }
        else if (humanChoice === "Rock" && computerChoice === "Paper"){
            console.log("You lose! Paper beat Rock");
            computerScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors"){
            console.log("You lose! Scissors beat Paper");
            computerScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock"){
            console.log("You win! Paper beat Rock");
            humanScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("You lose! Rock beat Scissors");
            computerScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            console.log("You win! Scissors beat Paper");
            humanScore += 1;
        }
        else if (humanChoice === computerChoice)
        {
            console.log("It's a tie");
        }
        console.log(`Human choice is: ${humanChoice}`);
        console.log(`Computer choice is: ${computerChoice}`);
        
        
    }
    for (let i = 0; i< 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}`);
        playRound(humanSelection, computerSelection);
        console.log("------------------------");

    }
    console.log(`Final human score is: ${humanScore}`);
    console.log(`Final computer score is: ${computerScore}`);

}

playGame();