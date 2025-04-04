 // Inicializa o carrossel - AGORA FUNCIONA NO MOBILE
 document.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: true,
        dots: '.glider-dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: {
                        prev: '.glider-prev',
                        next: '.glider-next'
                    }
                }
            }
        ]
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});