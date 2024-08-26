// glossary.js

// Sample JSON data
const jsonData = {
    "notebooks": [
        {
            "name": "Notebook 1",
            "categories": {
                "Saludos": [
                    {"word": "Hola", "definition": "Hello"},
                    {"word": "Buenos días", "definition": "Good morning"}
                ],
                "Títulos": [
                    {"word": "Señor", "definition": "Mr."},
                    {"word": "Señora", "definition": "Mrs."}
                ]
            }
        },
        {
            "name": "Notebook 2",
            "categories": {
                "Frases": [
                    {"word": "Gracias", "definition": "Thank you"},
                    {"word": "De nada", "definition": "You're welcome"}
                ]
            }
        }
    ]
};

const glossaryContent = document.getElementById('glossary-content');
const notebookTabs = document.getElementById('notebook-tabs').querySelectorAll('button');

// Function to display categories and entries
function displayNotebook(index) {
    const notebook = jsonData.notebooks[index];
    glossaryContent.innerHTML = ''; // Clear previous content

    for (const category in notebook.categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        notebook.categories[category].forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            wordSpan.textContent = entry.word;

            const definitionSpan = document.createElement('span');
            definitionSpan.classList.add('definition');
            definitionSpan.textContent = entry.definition;

            entryDiv.appendChild(wordSpan);
            entryDiv.appendChild(definitionSpan);
            categoryDiv.appendChild(entryDiv);
        });

        glossaryContent.appendChild(categoryDiv);
    }
}

// Event listeners for notebook tabs
notebookTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Set active tab
        notebookTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Display corresponding notebook
        displayNotebook(index);
    });
});

// Initially display the first notebook
displayNotebook(0);
notebookTabs[0].classList.add('active');
