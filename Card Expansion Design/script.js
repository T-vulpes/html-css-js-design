document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const expandedCard = document.getElementById('expandedCard');
    const closeBtn = document.querySelector('.close-btn');
    const cardContent = document.getElementById('cardContent');
    
    cards.forEach(card => {
        // Click event for "read-more" button
        card.querySelector('.read-more').addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event from bubbling up to the card click event
            const fullText = card.querySelector('.full-text').innerHTML;
            cardContent.innerHTML = fullText;
            expandedCard.style.display = 'flex'; // Show the expanded card
        });
    });

    // Close button to close the expanded card
    closeBtn.addEventListener('click', () => {
        expandedCard.style.display = 'none'; // Hide the expanded card
    });
    
    // Make sure the initial state is with all 4 cards visible (not expanded)
    expandedCard.style.display = 'none';
});
