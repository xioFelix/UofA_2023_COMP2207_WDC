function changeImage() {
  const images = document.getElementById("src");
  const description = document.getElementById("alt-text");

  const image = new XMLHttpRequest();
  image.onreadystatechange = function () {
    if (image.readyState === XMLHttpRequest.DONE) {
      if (image.status === 200) {
        const data = JSON.parse(image.responseText);
        images.src = `./images/${data.uri}`;
        images.alt = data.description;
        description.innerText = data.description;
      }
    }
  };
  image.open("GET", "/images.json", true);
  image.send();
}

changeImage();
setInterval(changeImage, 10000);