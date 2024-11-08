let userScore = 0;
let computerScore = 0;
const maxWins = 3;

const userName = prompt("Введіть Ваше ім'я:");
document.getElementById("username").textContent = userName;

function generateNumbers() {
    const userNumber = Math.floor(Math.random() * 10) + 1;  
    const computerNumber = Math.floor(Math.random() * 10) + 1;  

    document.getElementById("userNumber").textContent = userNumber;
    document.getElementById("computerNumber").textContent = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
        document.getElementById("winner").textContent = userName + " wins this round!";
    } else if (computerNumber > userNumber) {
        computerScore++;
        document.getElementById("winner").textContent = "Computer wins this round!";
    } else {
        document.getElementById("winner").textContent = "It's a tie!";
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (userScore === maxWins) {
        alert(userName + " wins the game!");
        resetGame();
    } else if (computerScore === maxWins) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userNumber = 0;
    computerNumber = 0;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userNumber").textContent = userScore;
    document.getElementById("computerNumber").textContent = computerScore;
    document.getElementById("winner").textContent = "";
}

document.getElementById("generate").addEventListener("click", generateNumbers);
document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
