function changeImage() {
  const image = document.getElementById("imageUri");
  const description = document.getElementById("description");

  const reqImages = new XMLHttpRequest();
  reqImages.open("GET", "/images.json", true);
  reqImages.send();
  reqImages.onreadystatechange = function() {
    if (reqImages.readyState === XMLHttpRequest.DONE) {
      if (reqImages.status === 200) {
        const data = JSON.parse(reqImages.responseText);
        image.src = "images/"+data.uri;
        image.alt = data.description;
        description.innerText = data.description;
      }
    }
  };
}
setInterval(changeImage, 10000);