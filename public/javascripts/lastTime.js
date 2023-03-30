  // 4.1
  function lastTime() {
    alert("Load the function loadTime!");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("lastTime").innerHTML = this.responseText;
    };
    xhttp.open("GET", "./last.txt");
    xhttp.send();
  }