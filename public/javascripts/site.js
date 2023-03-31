const contentDiv = document.querySelector('#content');
const contactBtn = document.querySelector('#contact');
const searchBtn = document.querySelector('#search');
const aboutBtn = document.querySelector('#about');

function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => contentDiv.innerHTML = html)
    .catch(error => console.log(error));
}

contactBtn.addEventListener('click', () => {
  loadPage('/contact.ajax');
});

searchBtn.addEventListener('click', () => {
  loadPage('/search.ajax');
});

aboutBtn.addEventListener('click', () => {
  loadPage('/about.ajax');
});