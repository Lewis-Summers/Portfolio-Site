// console.log("Hello, World!");
const cursor = document.querySelector(".cursor-dot");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.03; // Adjust this value to control the speed of the cursor

document.addEventListener("DOMContentLoaded", () => {
    // Add the mousemove event listener to track initial mouse position
    document.addEventListener("mousemove", updateMousePosition);

    // Update mouse position every 100 milliseconds
    setInterval(updateMousePosition(), 100);
});

function updateMousePosition(e) {
    // Update mouseX and mouseY with the current mouse position
    mouseX = e.clientX - cursor.offsetWidth / 2;
    mouseY = e.clientY - cursor.offsetHeight / 2;
}

function updateCursor() {
    const dots = document.querySelectorAll('.edot');

    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI; // Calculate angle in degrees
    cursorX += dx * speed;
    cursorY += dy * speed;
    
    // console.log(cursorX, cursorY);
    // drawBoundingRect(cursorX, cursorY);

    dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        // drawBoundingRect(dot)
        const size = 30;
        const left = rect.left-size;
        const right = rect.right;
        const top = rect.top-size;
        const bottom = rect.bottom;
        
        if ((left < cursorX && cursorX < right) && (top < cursorY && cursorY < bottom)) {
            dot.style.backgroundColor = 'black';
        }

    });
    
    cursor.style.top = cursorY + "px";
    cursor.style.left = cursorX + "px";
    
    if (angle > 90 || angle < -90) { // Check if cursor is facing left
        cursor.style.transform = `rotate(${angle-180}deg) scaleX(-1)` // Flip cursor
         // Apply the CSS class
    } else {
        cursor.style.transform = `rotate(${angle}deg) scaleX(1)` // Flip cursor
    }
    
     // Rotate cursor

    requestAnimationFrame(updateCursor);
}


function drawBoundingRect(x, y) {
    // console.log(x, y);
    const rect = document.createElement('div');
    rect.style.position = 'absolute';
    rect.style.top = y 
    rect.style.left = x
    rect.style.width = '50px';
    rect.style.height = '50px';
    rect.style.border = '2px solid red';
    rect.style.zIndex = '9999';
    document.body.appendChild(rect);
  }

updateCursor();




