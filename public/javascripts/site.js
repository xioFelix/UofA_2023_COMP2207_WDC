const contentDiv = document.querySelector('#content');

function loadFunction(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => document.querySelector('#content').innerHTML = html);
}

function contact() {
  const contact = new XMLHttpRequest();
  contact.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      contentDiv.innerHTML = this.responseText;
    }
  };
  contact.open("GET", '/contact.ajax', true);
  contact.send();
}

function search() {
  const search = new XMLHttpRequest();
  search.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      contentDiv.innerHTML = this.responseText;
    }
  };
  search.open("GET", '/search.ajax', true);
  search.send();
}

function about() {
  const about = new XMLHttpRequest();
  about.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      contentDiv.innerHTML = this.responseText;
    }
  };
  about.open("GET", '/about.ajax', true);
  about.send();
}