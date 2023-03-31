const contentDiv = document.getElementById('content');
const contactButton = document.getElementById('contact');
const searchButton = document.getElementById('search');
const aboutButton = document.getElementById('about');

function loadSite(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => contentDiv.innerHTML = html)
    .catch(error => console.log(error));
}

contactButton.addEventListener('click', () => {
  loadSite('/contact.ajax');
});

searchButton.addEventListener('click', () => {
  loadSite('/search.ajax');
});

aboutButton.addEventListener('click', () => {
  loadSite('/about.ajax');
});