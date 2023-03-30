// 4.1
function lastTime() {
  document.getElementById("lastTime").innerHTML = "Hello";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./last.txt", true);
  xhttp.send();
  xhttp.onload = function () {
    if (xhttp.status === 200) {
      var timeP = document.getElementById("lastTime");
      timeP.innerHTML = this.responseText;
    }
  };
}