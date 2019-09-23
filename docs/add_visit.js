window.addEventListener("load", () => {
  var _spec = document.querySelector("#select-spec");
  var _users = document.querySelector("#users");
  var specialists = [];
  var users = [];

  specialists = JSON.parse(window.localStorage.getItem("specialists"));
  users = JSON.parse(window.localStorage.getItem("users"));
  //Add specialists in \
  if(specialists==null)
    {
      return;
    }
  specialists.forEach(el => {
    var tmp = document.createElement("option");
    tmp.setAttribute("value", el.id);
    tmp.text = el.name;
    _spec.add(tmp);
  });
  //Add users in 
  if(users==null)
  {return;}
  
  users.forEach(el => {
    var tmp = document.createElement("option");
    tmp.setAttribute("value", el.name);
    _users.appendChild(tmp);
  });

  var btn = document.querySelector("#add-user");
  btn.addEventListener("click", () => {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
    users = JSON.parse(window.localStorage.getItem("users"));
    var _name = document.querySelector("#name").value;

    if (_name.length < 3) {
      alert("Name Tooooo short! :(");
      return false;
    }

    // Create and add visit
    var visit = {
      user: findOrCreate(users, _name),
      spec: _spec.selectedIndex,
      time: "0",
      served: "false"
    };

    var visits = [];
    visits = JSON.parse(window.localStorage.getItem("visits"));
    visits.push(visit);
    document.querySelector("#name").value = "";
    window.localStorage.setItem("visits", JSON.stringify(visits));

    SuccessAlert();
  });
});

function SuccessAlert() {
  var alert = document.querySelector(".alert");
  alert.style.opacity = 1;
  console.log("added alert");
  setTimeout(function() {
    RemoveSuccessAlert(alert);
  }, 1000);
}
function RemoveSuccessAlert(alert) {
  console.log("deleted alert");
  alert.style.opacity = 0;
}
