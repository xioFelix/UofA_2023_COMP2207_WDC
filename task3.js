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
let main = document.getElementById("main");
let menu = document.getElementById("menu");

main.addEventListener("click", fsMenu);
menu.addEventListener("click", fsMenu);

function fsMenu() {
    if(menu.style.display === "none"){
        menu.style.display = "block";
        main.style.display = "none";
    }else{
        menu.style.display = "none";
        main.style.display = "block";
    }
}