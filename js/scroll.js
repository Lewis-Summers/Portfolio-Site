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
    dots.forEach((dot, index) => {
        // console.log(index+1);
        // console.log(scrolled/index+1)
        if (scrolled/index+1 > 100) {
            dot.style.opacity = 0;
        }else {
            dot.style.opacity = 1;
        }
    })
});
