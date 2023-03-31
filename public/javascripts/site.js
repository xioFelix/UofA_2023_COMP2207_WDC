const contentDiv = document.querySelector('#content');
const contactButton = document.querySelector('#contact');
const searchButton = document.querySelector('#search');
const aboutButton = document.querySelector('#about');

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