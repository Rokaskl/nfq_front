window.addEventListener("load", () => {
  var _spec = document.querySelector("#select-spec");
  var specs = [];
  specs = JSON.parse(window.localStorage.getItem("specialists"));

  specs.forEach(el => {
    var tmp = document.createElement("option");
    tmp.setAttribute("class", "option");
    tmp.text = el;
    _spec.add(tmp);
  });

  var btn = document.querySelector("#add-user");
  btn.addEventListener("click", () => {
    var _name = document.querySelector("#name").value;

    if (_name.length < 3 || _spec.length < 3) {
      alert("Fill the form!");
      return false;
    }
    var user = {
      name: _name,
      spec: _spec.value
    };
    var users = [];
    users = JSON.parse(window.localStorage.getItem("users"));

    users.push(user);
    document.querySelector("#name").value = "";
    window.localStorage.setItem("users", JSON.stringify(users));
  });
});
