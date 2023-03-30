  // 4.1
  function lastTime() {
    document.getElementById("lastTime").innerHTML = "Hello";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./last.txt", true);
    xhttp.send();
    xhttp.onload = function () {
      if (xhttp.status === 200) {
        var timeP = document.getElementById("lastTime");
        if (this.responseText) {
          timeP.innerHTML = this.responseText;
          console.log("Successfully use the xhttp function!");
        } else {
          console.log("Response is empty");
        }
      } else {
        console.log("Request failed with status " + xhttp.status);
      }
    };
    console.log("Successfully use the lasttime function!");
  }

