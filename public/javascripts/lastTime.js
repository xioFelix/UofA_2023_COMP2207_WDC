  // 4.1
  function lastTime() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      var timeP = document.getElementById("lastTime");
      timeP.innerHTML = "Fail to Change";
      timeP.innerHTML = this.responseText;

    };
    xhttp.open("GET", "http://localhost:8080/last.txt", true);
    xhttp.send();
  }