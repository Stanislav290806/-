document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                entry.target.style.transition = 'transform 0.6s ease-out';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transform = 'translateY(20px)'; 
            }
        }); 
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.style.transform = 'translateY(20px)'; 
    });
});
