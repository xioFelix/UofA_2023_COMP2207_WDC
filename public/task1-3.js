function send() {
    let lines = document.getElementById("lines").value.split('\n');
    let suffix = document.getElementById("suffix").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerText = this.responseText;
        }
    };
    xhttp.open("POST", "/combine", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        lines: lines,
        suffix: suffix
    }));
}