function addDot(location) {
    const edot = document.createElement('div');
    edot.classList.add('edot');
    location.appendChild(edot);
}

const edotVertical = document.querySelectorAll('.edot-vert');
const edotHorizontal = document.querySelectorAll('.edot-horizontal');
const container = document.querySelector('.hero-container');
const heroText = document.querySelector('.hero-text');
const gameText = document.querySelector('.game-text');
const gameTextText = document.querySelector('#game-text');
gameText.style.display = 'none';

const width = container.offsetWidth;
const height = container.offsetHeight;

const edotSize = 30;

const edotWCount = Math.floor((width - width * 0.05) / edotSize) - 2;
const edotHCount = Math.floor((height) / edotSize) - 1;

console.log(edotWCount, edotHCount);

for (let i = 0; i < edotHCount; i++) {
    console.log("adding dots")
    addDot(edotVertical[0]);
    addDot(edotVertical[1]);
}

for (let i = 0; i < edotWCount; i++) {
    addDot(edotHorizontal[0]);
    addDot(edotHorizontal[1]);
}

let hasAlerted = false;
let isTextOne = false;
let interval;

document.addEventListener("mousemove", () => {
    const edots = document.querySelectorAll('.edot');
    let allBlack = true;
    edots.forEach(edot => {
        const backgroundColor = window.getComputedStyle(edot).backgroundColor;
        if (backgroundColor !== 'rgb(0, 0, 0)' && backgroundColor !== '#000' && backgroundColor !== 'black') {
            allBlack = false;
        }
    });

    if (allBlack && !hasAlerted) {
        hasAlerted = true;
        heroText.style.display = 'none';
        gameText.style.display = 'block';
        // Set interval to toggle text every few seconds
        interval = setInterval(() => {
            if (isTextOne) {
                gameTextText.innerText = 'Click to';
                isTextOne = false;
            } else {
                gameTextText.innerText = 'Play Again!';
                isTextOne = true;
            }
        }, 500); // Change 3000 to the desired interval in milliseconds (here it's 3 seconds)
    }
});

gameText.addEventListener('click', () => {
    console.log('clicked');
    const edots = document.querySelectorAll('.edot');
    edots.forEach(edot => {
        edot.style.backgroundColor = 'white';
    });
    hasAlerted = false;
    heroText.style.display = 'block';
    gameText.style.display = 'none';
    gameTextText.innerText = 'Click to';
    isTextOne = false;
    clearInterval(interval);

});



