// Destaca no menu a seção que está visível na tela no momento.
// Efeito sutil, ligado à navegação real do usuário — não decorativo.

const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id], .hero[id]');

if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach((link) => {
                        link.style.color = link.getAttribute('href') === `#${id}`
                            ? 'var(--text)'
                            : '';
                    });
                }
            });
        },
        { rootMargin: '-50% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
}