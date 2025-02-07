let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    let randomNumber = Math.random(); 
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "Human wins!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateScores() {
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function handleChoice(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerScore === 5) {
        alert("Game over!");
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 5) {
        alert("You win!");
        humanScore = 0;
        computerScore = 0;
    } else {
        console.log(playRound(humanChoice, computerChoice));
        updateScores();
    }
}

document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => handleChoice("scissors"));





