var bt = document.querySelector("#find-user");
bt.addEventListener("click", () => {
  var user = document.querySelector("#name").value;
  var users = [];
  var userVisits = [];
  output = "";
  var displayResources = document.querySelector("#tables");

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
  if (userVisits.length > 0) {
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
        "</td></tr>";
    });
    output += "</table></div>";
    displayResources.innerHTML = output;
    console.log(output);
  } else {
    displayResources.innerHTML = "<H2 style= 'color : red;'> No visits! <H2> ";
  }
});
