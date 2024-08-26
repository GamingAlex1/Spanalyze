document.addEventListener('DOMContentLoaded', function() {
  fetch('data/glossary.json')
    .then(response => response.json())
    .then(data => {
      const notebooksContainer = document.getElementById('notebooks');
      const contentContainer = document.getElementById('glossary-content');

      data.notebooks.forEach((notebook) => {
        const button = document.createElement('button');
        button.textContent = notebook.name;
        button.addEventListener('click', () => loadNotebook(notebook));
        notebooksContainer.appendChild(button);
      });

      function loadNotebook(notebook) {
        contentContainer.innerHTML = ''; // Clear existing content

        Object.keys(notebook.categories).forEach(category => {
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
            entryDiv.appendChild(wordSpan);

            const definitionSpan = document.createElement('span');
            definitionSpan.classList.add('definition');
            definitionSpan.textContent = entry.definition;
            entryDiv.appendChild(definitionSpan);

            categoryDiv.appendChild(entryDiv);
          });

          // Adjust the height of the category to match its content
          categoryDiv.style.height = categoryDiv.scrollHeight + 'px';

          contentContainer.appendChild(categoryDiv);
        });
      }
    })
    .catch(error => console.error('Error loading glossary:', error));
});