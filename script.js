const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.project-card');
hiddenElements.forEach((el) => observer.observe(el));

 const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.project-card');
        hiddenElements.forEach((el) => observer.observe(el));