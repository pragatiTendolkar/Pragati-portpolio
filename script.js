// Add a scroll event listener to highlight the active section in the header
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(function(section, index) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const id = section.id;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Highlight the corresponding link in the header
            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        } else {
            // Remove the highlight from other links
            document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
        }
    });
});
