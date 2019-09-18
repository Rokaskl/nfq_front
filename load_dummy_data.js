window.addEventListener("load", function() {
  document.querySelector("#load-dummy").addEventListener("click", function() {
    loadJSON(function(response) {
      if (response != null) {
        window.localStorage.setItem("users", response);
      }
    });
  });
});
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "dummy_users.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
