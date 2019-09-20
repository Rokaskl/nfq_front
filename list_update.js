window.addEventListener("load", () => {
  updateUsers();
});
window.addEventListener("storage", () => {
  updateUsers();
});

function updateUsers() {
  console.log("Updating tables");
  var displayResources = document.querySelector("#tables");
  var specialists = [];
  var users = [];
  var output = "";
  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }
  if (typeof window.localStorage.getItem("specialists") !== undefined) {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
  }

  specialists.forEach(specialist => {
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
        output += "<tr><td>" + user.name + "</td><td>" + "--:--" + "</td></tr>";
      }
    });
    output += "</table></div>";
    if (output != emtyOutput) {
      displayResources.innerHTML += output;
    }
  });
}
