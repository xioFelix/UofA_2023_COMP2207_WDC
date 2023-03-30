  // 4.1
  function lastTime() {
    document.getElementById("lastTime").innerHTML = "Hello";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      var timeP = document.getElementById("lastTime");
      xhttp.open("GET", "./last.txt", true);
      xhttp.send();
      timeP.innerHTML = "Fail to Change";
      timeP.innerHTML = this.responseText;

    };

    console.log("Successfully use the lasttime function!");
  }