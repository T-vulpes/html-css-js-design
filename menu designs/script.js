// Accordion Menu Script
document.querySelectorAll('.accordion-menu ul > li > a').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-menu ul > li').forEach(li => {
                li.classList.remove('active');
            });
            parent.classList.add('active');
        }
    });
});
