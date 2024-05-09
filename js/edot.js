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



const dots = document.querySelectorAll('.edot');
const trigger = document.querySelector('.cursor-dot');

// Function to check collision between two elements
function isColliding(elem1, rect2) {
    const rect1 = elem1.getBoundingClientRect();
    return (
        rect1.right < rect2[0]+30 ||
        rect1.left > rect2[0] ||
        rect1.bottom < rect2[1]+30 ||
        rect1.top > rect2[1]
    );
}

// Function to hide dots when colliding with the trigger element
function checkCollision(x, y) {
    drawBoundingRect(trigger);
    // console.log(cursorX, cursorY)
    // console.log(mouseX, mouseY)
    console.log(cursor.style.top, cursor.style.left)
    dots.forEach(dot => {
        if (isColliding(dot, (trigger))) {
            dot.style.backgroundColor = 'red';
        }
    });
}

function drawBoundingRect(element) {
    const boundingRect = element.getBoundingClientRect();
    const rect = document.createElement('div');
    rect.style.position = 'absolute';
    rect.style.top = boundingRect.top + 'px';
    rect.style.left = boundingRect.left + 'px';
    rect.style.width = boundingRect.width + 'px';
    rect.style.height = boundingRect.height + 'px';
    rect.style.border = '2px solid red';
    rect.style.zIndex = '9999';
    document.body.appendChild(rect);
  }
  

// Check collision initially and on window resize
checkCollision();
window.addEventListener('resize', checkCollision);

// Move trigger element
// window.addEventListener('mousemove', function (event) {
//     trigger.style.left = (event.clientX - trigger.offsetWidth / 2) + 'px';
//     trigger.style.top = (event.clientY - trigger.offsetHeight / 2) + 'px';
//     checkCollision();
// });