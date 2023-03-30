  // 4.1
  function lastTime() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("lastTime").innerHTML = this.responseText;
    };
    xhttp.open("GET", "http://localhost:8080/last.txt", true);
    xhttp.send();
    alert(${this.responseText});
  }