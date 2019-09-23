document.querySelector("#load-dummy").addEventListener("click", function() {
  var files = [
    "data/dummy_users.json",
    "data/dummy_spec.json",
    "data/dummy_visits.json"
  ];
  loadJSON(function(response) {
    if (response != null) {
      var users = [];
      users = JSON.parse(response);

      window.localStorage.setItem("users", response);
    }
  }, files[0]);
  loadJSON(function(response) {
    if (response != null) {
      var specialists = [];
      specialists = JSON.parse(response);
      window.localStorage.setItem("specialists", response);
    } else {
      failedToLoad();
    }
  }, files[1]);
  loadJSON(function(response) {
    if (response != null) {
      var visits = [];
      visits = JSON.parse(response);
      window.localStorage.setItem("visits", response);
    } else {
      failedToLoad();
    }
  }, files[2]);
});

function loadJSON(callback, file) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", file, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    } else {
      failedToLoad();
    }
  };
  xobj.send(null);
}
function failedToLoad() {
  console.log("Failed to load dummy data");
}
