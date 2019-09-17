window.addEventListener("load", () => {
  // setInterval(updateUsers, 100);

  //function updateUsers() {
  var displayResources = $("#tables");
  var specialists = [];
  users = JSON.parse(window.localStorage.getItem("users"));
  var output;

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
      displayResources.html(output);
      $("table").addClass("table");
    });

    //}
  }
});
