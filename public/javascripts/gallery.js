function changeImage() {
  const image = document.getElementById("imageUri");
  const description = document.getElementById("description");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/images.json", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        image.src = "images/"+data.uri;
        image.alt = data.description;
        description.innerText = data.description;
      }
    }
  };
}
setInterval(changeImage, 10000);