document.addEventListener('DOMContentLoaded', function() {
    fetch('data/glossary.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const glossaryContainer = document.getElementById('glossary');
            if (glossaryContainer) { // Check if the element is found
                data.forEach(entry => {
                    const termElement = document.createElement('div');
                    termElement.className = 'glossary-term';
                    termElement.textContent = `${entry.term}: ${entry.definition}`;
                    glossaryContainer.appendChild(termElement);
                });
            } else {
                console.error('Element with ID "glossary" not found');
            }
        })
        .catch(error => console.error('Error loading glossary:', error));
});
