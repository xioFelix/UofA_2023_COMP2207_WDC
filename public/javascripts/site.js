const contentDiv = document.getElementById('content');
const contactButton = document.getElementById('contact');
const searchButton = document.getElementById('search');
const aboutButton = document.getElementById('about');

function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => contentDiv.innerHTML = html)
    .catch(error => console.log(error));
}

contactButton.addEventListener('click', () => {
  loadPage('/contact.ajax');
});

searchButton.addEventListener('click', () => {
  loadPage('/search.ajax');
});

aboutButton.addEventListener('click', () => {
  loadPage('/about.ajax');
});