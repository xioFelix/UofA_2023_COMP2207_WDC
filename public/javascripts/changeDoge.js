// 4.6
function changeImage() {
    const image = document.getElementById("src");
    const description = document.getElementById("alt-text");

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                image.src = "images/" + data.uri;
                image.alt = data.description;
                description.innerText = data.description;
            }
        }
    };
    xhr.open("GET", "/images.json", true);
    xhr.send();
}

changeImage();
setInterval(changeImage, 10000);