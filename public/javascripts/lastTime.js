  // 4.1
  function lastTime() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      var timeP = document.getElementById("lastTime");
      timeP.innerHTML = "Fail to Change";
      timeP.innerHTML = this.responseText;

    };
    xhttp.open("GET", "./last.txt", true);
    xhttp.send();
    console.log("Successfully use the lasttime function!");
  }