let userScore = 0;
const userName = prompt("Введіть Ваше ім'я:");
document.getElementById("name").textContent = userName;

const slotImages = [
    'apple.png', 
    'pear.avif',
    'peach.avif',
    'plum.webp',
    'apricoat.png'
];

function generateNumbers() {
    const slots = [];
    const spinCount = 10; 
    const spinDuration = 100; 

    for (let spin = 0; spin < spinCount; spin++) {
        setTimeout(() => {
            for (let i = 0; i < 9; i++) {
                let randomIndex = Math.floor(Math.random() * slotImages.length);
                slots[i] = slotImages[randomIndex];
                document.getElementById(`slot${i + 1}`).style.backgroundImage = `url(${slots[i]})`;
            }

            if (spin === spinCount - 1) {
                setTimeout(() => {
                    checkWin(slots);
                }, 200); 
            }
        }, spin * spinDuration);
    }
}

function checkWin(slots) {
    const centerRowImages = [slots[3], slots[4], slots[5]]; 
    const allEqual = centerRowImages.every((val, i, arr) => val === arr[0]);

    if (allEqual) {
        alert(`${userName}, ви виграли!`);
    } else {
        alert("Спробуйте ще раз.");
    }
}

document.getElementById("generate").addEventListener("click", generateNumbers);
document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});