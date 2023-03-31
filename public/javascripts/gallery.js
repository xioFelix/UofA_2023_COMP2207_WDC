function changeImage() {

  fetch('/images.js')
    .then(response => response.js())
    .then(data => {
      const imageElement = document.getElementById("src");
      const altText = document.getElementById("alt-text");
      imageElement.src = `/images/${data.uri}`;
      imageElement.alt = data.description;
      altText.innerText = data.description;
    });
}

changeImage();
setInterval(changeImage, 10000);