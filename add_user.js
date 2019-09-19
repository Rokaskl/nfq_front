window.addEventListener("load", () => {
  var btn = document.querySelector("#add-user");
  btn.addEventListener("click", () => {
    var _name = document.querySelector("#name").value;
    var _spec = document.querySelector("#spec").value;
    console.log("CLICK)");
    if (_name.length < 3 || _spec.length < 3) {
      alert("Fill the form!");
      return false;
    }
    var user = {
      name: _name,
      spec: _spec
    };
    var users = [];
    users = JSON.parse(window.localStorage.getItem("users"));

    users.push(user);
    document.querySelector("#name").value = "";
    document.querySelector("#spec").value = "";
    window.localStorage.setItem("users", JSON.stringify(users));
  });
});
