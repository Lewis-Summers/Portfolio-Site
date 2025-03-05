const breakpoints = [
    {}
]

window.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    const scrolled = window.scrollY;
    const pacman = document.querySelector('.ghost-container');
    const dots = document.querySelectorAll('.dot');
    pacman.style.transform = `translateX(${scrolled/3}vh)`; // Move content sideways
    // console.log(dots);
    dots.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const pacmanRect = pacman.getBoundingClientRect();
        
        // Check distance between Pac-Man and dot
        const distance = pacmanRect.left - dotRect.left;

        if (distance > -10) { 
            dot.style.opacity = 0; // Hide when Pac-Man reaches it
        } else {
            dot.style.opacity = 1;
        }
    });
});
