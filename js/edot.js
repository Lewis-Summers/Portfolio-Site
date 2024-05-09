function addDot(location) {
    const edot = document.createElement('div');
    edot.classList.add('edot');
    location.appendChild(edot);
}

const edotVertical = document.querySelectorAll('.edot-vert');
const edotHorizontal = document.querySelectorAll('.edot-horizontal');
const container = document.querySelector('.hero-container');

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

let allBlack = false;
document.addEventListener("mousemove", ()=>{
    const edots = document.querySelectorAll('.edot');
    allBlack = true;
    
    edots.forEach(edot => {
        const backgroundColor = window.getComputedStyle(edot).backgroundColor;
        if (backgroundColor !== 'rgb(0, 0, 0)' && backgroundColor !== '#000' && backgroundColor !== 'black') {
            allBlack = false;
        }
    });
});

const heroText = document.querySelector('#hero-text');
while (allBlack) {
    let textFlag = false;
    setInterval(() => {
        if (textFlag) {
            targetElement.textContent = "Original Text";
        } else {
            targetElement.textContent = "Changed Text";
        }
    }, 1000);
}


