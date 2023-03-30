  // 4.1
  function lastTime() {
    document.getElementById("lastTime").innerHTML = "Hello";
    const xhttp = new XMLHttpRequest();
    router.onload = function () {
      var timeP = document.getElementById("lastTime");
      router.open("GET", "./last.txt", true);
      router.send();
      timeP.innerHTML = "Fail to Change";
      timeP.innerHTML = this.responseText;
      console.log("Successfully use the xhttp function!");
    };

    console.log("Successfully use the lasttime function!");
  }