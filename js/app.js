document.addEventListener('DOMContentLoaded', function() {
    const glossaryContainer = document.getElementById('glossary');
    if (glossaryContainer) {
        fetch('data/glossary.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                data.forEach(entry => {
                    const termElement = document.createElement('div');
                    termElement.className = 'glossary-term';
                    termElement.textContent = `${entry.term}: ${entry.definition}`;
                    glossaryContainer.appendChild(termElement);
                });
            })
            .catch(error => console.error('Error loading glossary:', error));
    }
});
