window.addEventListener("load", () => {
  if (typeof Storage !== "undefined") {
    console.log("browser is supporting local storage");
  } else {
    console.log("browser is not supporting local storage");
    if (document.body != null) {
      var body = document.body;
    }
    var alert = document.createElement("H1");
    alert.innerText = "YOUR Browser is not supporting local storage";
    body.style.background = "red";
    body.innerHTML = "";

    document.body.appendChild(alert);
  }
});
