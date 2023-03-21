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

var blue = document.getElementById("blue");
var red = document.getElementById("red");
var number = document.getElementById("number");
var setBold = document.getElementById("bold");
var setItalic = document.getElementById("italic");

function Post() {
    const date = new Date();
    // let date = d.toLocaleString();

    var posts = document.getElementById("posts");

    var date_p = document.createElement('P');
    var content_p = document.createElement('P');

    date_p.classList.add("post-time");
    content_p.classList.add("post-content");

    date_p.innerText = date;
    content_p.innerText = document.getElementById("input-content").value;

    posts.appendChild(date_p);
    posts.appendChild(content_p);

    // 3.4


    if (blue.checked == true) {
        content_p.style.color = "blue";
    }
    else if(red.checked == true) {
        content_p.style.color = "red";
    }

    if (setBold.checked == true) {
        content_p.style.fontWeight = "bold";
    }
    if (setItalic.checked == true) {
        content_p.style.fontStyle = "italic";
    }
}

function creatPost() {
    for (let i = 0; i < number.value; i++) {
        Post();
    }
}

// 3.3
function fsMenu() {

    var main = document.getElementById("main");
    var menu = document.getElementById("menu");

    if (menu.style.display === "none") {
        menu.style.display = "block";
        main.style.display = "none";
    }
    else {
        menu.style.display = "none";
        main.style.display = "block";
    }
}

// 3.5
function ChangeBgColor() {
    var bgColor = document.getElementById("backgroundColor");
    var bgColorSet = document.getElementById("bgColorSet");

    bgColor.style.backgroundColor = bgColorSet.value;
}