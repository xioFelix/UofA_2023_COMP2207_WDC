// 3.1
let mcount = 0;
document.getElementById("mcount").onmouseover = function () {
    mouseCount();
};
function mouseCount() {
    mcount++;
    document.getElementById("mcount").innerHTML = mcount;
}

// 3.2
function creatPost() {
    const date = new Date();
    // let date = d.toLocaleString();

    var posts = document.getElementById("posts");

    let date_p = document.createElement('P');
    let content_p = document.createElement('P');

    date_p.classList.add("post-time");
    content_p.classList.add("post-content");


    date_p.innerText = date;
    content_p.innerText = document.getElementById("input-content").value;

    posts.appendChild(date_p);
    posts.appendChild(content_p);
}

// 3.3
let menu = document.getElementById("main");
let back = document.getElementById("menu");

menu.addEventListener("click", foldMenu);
back.addEventListener("click", showMenu);

function foldMenu() {
    menu.style.display = "none";
    back.style.display = "block";
}

function showMenu() {
    menu.style.display = "block";
    back.style.display = "none";
}