window.addEventListener("load", () => {
  var bt = document.querySelector("#next-user");
  var displayResources = document.querySelector("#tables");
  var users = [];
  var specialist;
  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }
  var _spec = document.querySelector("#select-spec");
  var specs = [];
  specs = JSON.parse(window.localStorage.getItem("specialists"));

  specs.forEach(el => {
    var tmp = document.createElement("option");
    tmp.setAttribute("class", "option");
    tmp.text = el;
    _spec.add(tmp);
  });
  function update() {
    if (specs.includes(_spec.value)) {
      specialist = _spec.value;

      output = "";
      var emtyOutput =
        `<div class="table" id= "${specialist}-table" = >` +
        `<H1>${specialist}</H1>` +
        "<table><tr><th>Name</th><th>Estimated time</th>" +
        "</table></div>";
      output +=
        `<div class="table" id= "${specialist}-table" = >` +
        `<H1>${specialist}</H1>` +
        "<table><tr><th>Name</th><th>Estimated time</th>";
      users.forEach(user => {
        if (user.spec == specialist) {
          output +=
            "<tr><td>" + user.name + "</td><td>" + "--:--" + "</td></tr>";
        }
      });
      output += "</table></div>";
      displayResources.innerHTML = output;
    } else {
      displayResources.innerHTML = " ";
      bt.style.opacity = 0;
    }
    if (output != emtyOutput && specs.includes(_spec.value)) {
      bt.style.opacity = 1;
    }
  }
  bt.addEventListener("click", () => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].spec == specialist) {
        users.splice(i, 1);
        window.localStorage.setItem("users", JSON.stringify(users));
        console.log(users[i].name + " Was serviced");
        update();
        return;
      }
    }
  });

  _spec.addEventListener("change", () => {
    update();
  });
});
