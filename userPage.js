var bt = document.querySelector("#find-user");
bt.addEventListener("click", () => {
  updateTable();
});
function updateTable() {
  var user = document.querySelector("#name").value;
  var users = [];
  var userVisits = [];

  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }
  users.forEach(el => {
    if (el.name.toLowerCase() === user.toLowerCase()) {
      userVisits.push(el);
    }
  });
  console.log(user);
  console.log("found : " + userVisits.length);
  var displayResources = document.querySelector("#tables");

  var counter;
  var output = "";

  if (userVisits.length > 0) {
    counter = 0;
    output =
      `<div class="table" id= "${user}-table">` +
      `<H2>${user} visits</H2>` +
      "<table><tr><th>Name</th><th>Specialist</th><th>Estimated time</th>";
    userVisits.forEach(el => {
      output +=
        "<tr><td>" +
        el.name +
        "</td><td>" +
        el.spec +
        "</td><td>" +
        "--:--" +
        "</td><td>" +
        ` <button type="button" class="later" id=${counter}> Later</button>` +
        "</td></tr>";
      counter += 1;
    });
    output += "</table></div>";
    displayResources.innerHTML = output;
    var laterBtns = document.querySelectorAll(".later");
    if (laterBtns !== undefined) {
      laterBtns.forEach(laterBtn => {
        laterBtn.addEventListener("click", () => {
          var thisLater = userVisits[laterBtn.getAttribute("id")];
          MakeItLater(thisLater);
          updateTable();
        });
      });
    }
  } else {
    displayResources.innerHTML = "<H2 style= 'color : red;'> No visits! <H2> ";
  }
}
function MakeItLater(thisLater) {
  users = JSON.parse(window.localStorage.getItem("users"));

  for (var i = 0; i < users.length; i++) {
    if (users[i].name == thisLater.name && users[i].spec == thisLater.spec) {
      users.splice(i, 1);
      users.push(thisLater);
      window.localStorage.setItem("users", JSON.stringify(users));
      return;
    }
  }
}
