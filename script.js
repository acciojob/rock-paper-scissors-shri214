//your code here
// Define possible choices for the game
const choices = ["ROCK", "PAPER", "SCISSORS"];

// Get references to the relevant HTML elements
const gameNumberInput = document.getElementById("game-number");
const playGameButton = document.getElementById("play-game");
const userChoiceButtons = document.querySelectorAll(".user-choice");
const roundsLeftSpan = document.getElementById("rounds-left");
const userPointsSpan = document.getElementById("user-points");
const computerChooseSpan = document.getElementById("computer-choose");
const computerPointsSpan = document.getElementById("computer-points");
const roundResultSpan = document.getElementById("round-result");
const gameResultSpan = document.getElementById("game-result");

// Initialize game state variables
let numTurns = 0;
let numRoundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;

// Add click event listener to the play button
playGameButton.addEventListener("click", startGame);

// Add click event listeners to the user choice buttons
userChoiceButtons.forEach(button => {
  button.addEventListener("click", () => playRound(button.textContent));
});

// Function to start the game
function startGame() {
  // Get number of turns from input
  numTurns = parseInt(gameNumberInput.value);

  // Reset game state variables
  numRoundsLeft = numTurns;
  userPoints = 0;
  computerPoints = 0;

  // Update HTML display
  roundsLeftSpan.textContent = numRoundsLeft;
  userPointsSpan.textContent = userPoints;
  computerPointsSpan.textContent = computerPoints;
  roundResultSpan.textContent = "";

  // Enable user choice buttons
  userChoiceButtons.forEach(button => button.disabled = false);
}

// Function to play a round of the game
function playRound(userChoice) {
  // Decrement number of rounds left
  numRoundsLeft--;

  // Disable user choice buttons for this
