window.addEventListener("load", () => {
  setInterval(updateUsers, 500);
});

function updateUsers() {
  var displayResources = $("#table");

  users = JSON.parse(window.localStorage.getItem("users"));
  var output = "<table><thead><tr><th>Name</th></thead><tbody>";
  if (users != null) {
    users.forEach(user => {
      output += "<tr><td>" + user.name + "</td><td>";
    });
    output += "</tbody></table>";
    displayResources.html(output);
    $("table").addClass("table");
  }
}
