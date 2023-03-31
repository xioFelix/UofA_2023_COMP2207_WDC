function changeImage() {

  fetch('/images.js')
    .then(data => {
      let imageElement = document.getElementById("src");
      let altText = document.getElementById("alt-text");
      imageElement.src = `/images/${data.uri}`;
      imageElement.alt = data.description;
      altText.innerText = data.description;
    });
}

changeImage();
setInterval(changeImage, 10000);