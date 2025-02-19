document.addEventListener('DOMContentLoaded', function() {
    console.log('AZMUN Website Loaded');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for sections when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Parallax scrolling effect
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length) {
        window.addEventListener('scroll', function() {
            parallaxElements.forEach(element => {
                let scrollPosition = window.pageYOffset;
                element.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
            });
        });
    }

    // Dynamic text typing effect for the home page
    if (document.getElementById('home')) {
        let text = 'Welcome to AZMUN 2025, where diplomacy meets innovation!';
        let i = 0;
        let speed = 50;

        function typeWriter() {
            if (i < text.length) {
                document.getElementById('home').getElementsByTagName('p')[0].innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }
});
