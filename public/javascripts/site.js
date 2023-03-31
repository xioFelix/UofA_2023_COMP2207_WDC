const contentDiv = document.querySelector('#content');
const contactBtn = document.getElementById('contact');
const searchBtn = document.getElementById('search');
const aboutBtn = document.getElementById('about');

function loadSite(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => contentDiv.innerHTML = html)
    .catch(data => console.log(data));
}

contactBtn.addEventListener('click', () => {
  loadSite('/contact.ajax');
});

searchBtn.addEventListener('click', () => {
  loadSite('/search.ajax');
});

aboutBtn.addEventListener('click', () => {
  loadSite('/about.ajax');
});