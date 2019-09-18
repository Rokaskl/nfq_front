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
    console.log(users);
  }

  if (users != null) {
    users.forEach(user => {
      if (!specialists.includes(user.spec)) {
        specialists.push(user.spec);
        console.log(specialists);
      }
    });
    specialists.forEach(specialist => {
      output +=
        `<H1>${specialist}</H1>` +
        "<table><tr><th>Name</th><th>Specialist</th><th>Time</th>";
      users.forEach(user => {
        if (user.spec == specialist) {
          output +=
            "<tr><td>" +
            user.name +
            "</td><td>" +
            user.spec +
            "</td><td>" +
            "--:--" +
            "</td></tr>";
        }
      });
      output += "</table>";
      displayResources.innerHTML = output;
      document.querySelector("table").setAttribute("class", "table");
    });
  }
}
