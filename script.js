let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// ---------- UI (created in JS; no HTML changes needed) ----------
const app = document.createElement("div");
app.id = "rps-app";
document.body.appendChild(app);

const title = document.createElement("h2");
title.textContent = "Rock Paper Scissors";
app.appendChild(title);

const buttonsDiv = document.createElement("div");
buttonsDiv.id = "buttons";
app.appendChild(buttonsDiv);

const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
resultsDiv.style.marginTop = "12px";
app.appendChild(resultsDiv);

const scoreP = document.createElement("p");
scoreP.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
resultsDiv.appendChild(scoreP);

const messageP = document.createElement("p");
messageP.textContent = "Click a button to play!";
resultsDiv.appendChild(messageP);

const choices = ["Rock", "Paper", "Scissors"];

function makeButton(choice) {
  const btn = document.createElement("button");
  btn.textContent = choice;
  btn.dataset.choice = choice;
  btn.style.marginRight = "8px";
  return btn;
}

const rockBtn = makeButton("Rock");
const paperBtn = makeButton("Paper");
const scissorsBtn = makeButton("Scissors");

buttonsDiv.appendChild(rockBtn);
buttonsDiv.appendChild(paperBtn);
buttonsDiv.appendChild(scissorsBtn);

// ---------- Game logic ----------
function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function updateScore() {
  scoreP.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function endGame(winnerText) {
  gameOver = true;
  messageP.textContent = winnerText;

  // disable buttons
  buttonsDiv.querySelectorAll("button").forEach((b) => (b.disabled = true));

  // add restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play again";
  restartBtn.style.display = "block";
  restartBtn.style.marginTop = "10px";
  resultsDiv.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
    messageP.textContent = "Click a button to play!";
    buttonsDiv.querySelectorAll("button").forEach((b) => (b.disabled = false));
    restartBtn.remove();
  });
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  // normalize humanChoice (in case you ever call it with weird casing)
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice === computerChoice) {
    messageP.textContent = `Tie! You both chose ${humanChoice}.`;
    return;
  }

  const humanWins =
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper");

  if (humanWins) {
    humanScore++;
    messageP.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    messageP.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  updateScore();

  if (humanScore >= 5) endGame("🎉 You win the game! First to 5.");
  if (computerScore >= 5) endGame("💀 Computer wins the game! First to 5.");
}

// ---------- Event listeners ----------
buttonsDiv.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  if (gameOver) return;

  const humanChoice = e.target.dataset.choice; // "Rock" / "Paper" / "Scissors"
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
