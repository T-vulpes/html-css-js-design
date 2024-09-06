document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const expandedCard = document.getElementById('expandedCard');
    const closeBtn = document.querySelector('.close-btn');
    const cardContent = document.getElementById('cardContent');
    
    cards.forEach(card => {
        card.querySelector('.read-more').addEventListener('click', (event) => {
            event.stopPropagation(); 
            const fullText = card.querySelector('.full-text').innerHTML;
            cardContent.innerHTML = fullText;
            expandedCard.style.display = 'flex'; 
        });
    });

    closeBtn.addEventListener('click', () => {
        expandedCard.style.display = 'none';
    });
    
    expandedCard.style.display = 'none';
});
