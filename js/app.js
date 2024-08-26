document.addEventListener('DOMContentLoaded', function() {
    fetch('data/glossary.json')
        .then(response => response.json())
        .then(data => {
            const glossaryContainer = document.getElementById('glossary');
            data.forEach(entry => {
                const termElement = document.createElement('div');
                termElement.className = 'glossary-term';
                termElement.textContent = `${entry.term}: ${entry.definition}`;
                glossaryContainer.appendChild(termElement);
            });
        })
        .catch(error => console.error('Error loading glossary:', error));
});
