  // 4.1
  function lastTime() {
    document.getElementById("lastTime").innerHTML = "Hello";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./last.txt", true);
    xhttp.send();
    xhttp.onload = function () {
      var timeP = document.getElementById("lastTime").innerHTML = this.responseText;
      console.log("Successfully use the xhttp function!");
    };
    console.log("Successfully use the lasttime function!");
  }
