console.log("Hello, World!");
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
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI; // Calculate angle in degrees
    cursorX += dx * speed;
    cursorY += dy * speed;

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


updateCursor();




