window.addEventListener("load", function() {
  document.querySelector("#load-dummy").addEventListener("click", function() {
    loadJSON(function(response) {
      if (response != null) {
        var users = [];
        var specialists = [];
        users = JSON.parse(response);
        if (users != null) {
          users.forEach(user => {
            if (!specialists.includes(user.spec)) {
              specialists.push(user.spec);
            }
          });
        }
        window.localStorage.setItem("users", response);
        window.localStorage.setItem("specialists", JSON.stringify(specialists));
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
