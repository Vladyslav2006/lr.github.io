let userScore = 0;
let computerScore = 0;
const maxWins = 3;

const userName = prompt("Введіть Ваше ім'я:");
document.getElementById("username").textContent = userName;

function generateNumbers() {
    let userNumber;
    let computerNumber;

    do {
        userNumber = Math.floor(Math.random() * 10) + 1;
    } while (userNumber === 1 || userNumber === 5);

    do {
        computerNumber = Math.floor(Math.random() * 10) + 1;
    } while (computerNumber === 1 || computerNumber === 5);

    const userRectangle = document.getElementById("userNumber");
    const computerRectangle = document.getElementById("computerNumber");

    userRectangle.textContent = userNumber;
    computerRectangle.textContent = computerNumber;

    userRectangle.style.backgroundImage = `url('${getBackgroundImage(userNumber)}')`;
    computerRectangle.style.backgroundImage = `url('${getBackgroundImage(computerNumber)}')`;

    userRectangle.style.backgroundSize = "cover";
    computerRectangle.style.backgroundSize = "cover";

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    const winnerMessage = document.getElementById("winner");

if (userScore === maxWins) {
        winnerMessage.textContent = userName + " is a winner!";
        setTimeout(resetGame, 2000); 
    } else if (computerScore === maxWins) {
        winnerMessage.textContent = "Computer is a winner!";
        setTimeout(resetGame, 2000); 
    }
}
function getBackgroundImage(number) {
    switch (number) {
        case 2: return 'jack.svg';
        case 3: return 'queen.svg';
        case 4: return 'king.svg';
        case 6: return '6.svg';
        case 7: return '7.svg';
        case 8: return '8.svg';
        case 9: return '9.svg';
        case 10: return '10.svg';
        case 11: return 'ace.svg';
        default: return 'default.svg';  
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userNumber").textContent = 0;
    document.getElementById("computerNumber").textContent = 0;
    document.getElementById("winner").textContent = "";

    const userRectangle = document.getElementById("userNumber");
    const computerRectangle = document.getElementById("computerNumber");

    userRectangle.style.backgroundImage = `url('joker.jpg')`;
    computerRectangle.style.backgroundImage = `url('joker.jpg')`;
}
document.getElementById("generate").addEventListener("click", generateNumbers);
document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});