function changeImage() {

  fetch('/images.json')
    .then(response => response.json())
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