function color() {
    let color2 = new XMLHttpRequest();
    color2.onreadystatechange = function () {
        if (color2.readyState == 4 && color2.status == 200) {
            let h1 = document.getElementById("changeColor");
            h1.innerText = color2.response;
            h1.style.color = `${color2.response}`;
        }
    };
    color2.open("GET", '/color.txt');
    color2.send();
}
color();