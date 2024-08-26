document.addEventListener("DOMContentLoaded", function () {
    loadComponent('navbar', '/components/navbar.html');
    loadComponent('footer', '/components/footer.html');
});

function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
}
