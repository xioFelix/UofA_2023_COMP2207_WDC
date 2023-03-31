function changeImage() {

    fetch('/images.json')
      .then(response => response.json())
      .then(data => {
        const imageElement = document.getElementById('image');
        const descriptionElement = document.getElementById('description');
        imageElement.src = `/images/${data.uri}`;
        imageElement.alt = data.description;
        descriptionElement.innerText = data.description;
      })
      .catch(data => console.log(data));
  }

  changeImage();
  setInterval(changeImage, 10000);