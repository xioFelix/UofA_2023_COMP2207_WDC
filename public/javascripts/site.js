// const contentDiv = document.querySelector('#content');
// const contactBtn = document.querySelector('#contact');
// const searchBtn = document.querySelector('#search');
// const aboutBtn = document.querySelector('#about');

// function loadPage(url) {
//   fetch(url)
//     .then(response => response.text())
//     .then(html => contentDiv.innerHTML = html)
//     .catch(error => console.log(error));
// }

// contactBtn.addEventListener('click', () => {
//   loadPage('/contact.ajax');
// });

// searchBtn.addEventListener('click', () => {
//   loadPage('/search.ajax');
// });

// aboutBtn.addEventListener('click', () => {
//   loadPage('/about.ajax');
// });


// 4.4

// contact
function contact(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("contact").contentDiv.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET",'/contact.ajax', true);
    xhttp.send();
}

// search
function search(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            var button1 = document.getElementById("search").contentDiv;
            button1.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET",'/search.ajax');
    xhttp.send();
}

// about
function about(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("about").contentDiv.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET",'/about.ajax');
    xhttp.send();
}