function loadFunction(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => document.querySelector('#content').innerHTML = html);
}

function contact(){
  loadFunction('/contact.ajax');
}

function search(){
  loadFunction('/search.ajax');
}

function about(){
  loadFunction('/about.ajax');
}