var bt = document.querySelector("#find-user");
bt.addEventListener("click", () => {
  updateTable();
});
window.addEventListener("storage", () => {
  updateTable();
});
function updateTable() {
  var userName = document.querySelector("#name").value;
  var user = {};
  var specialist = {};
  var users = [];
  var visits = [];
  var userVisits = [];
  updateEstTimes();

  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }
  if (typeof window.localStorage.getItem("visits") !== undefined) {
    visits = JSON.parse(window.localStorage.getItem("visits"));
  }
  if (typeof window.localStorage.getItem("specialists") !== undefined) {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
  }

  for (var el of users) {
    if (userName.toLowerCase() == el.name.toLowerCase()) {
      user = el;
      break;
    }
  }

  visits.forEach(el => {
    if (el.user == user.id) {
      userVisits.push(el);
    }
  });

  console.log(user.name);
  console.log("found : " + userVisits.length);
  var displayResources = document.querySelector("#tables");

  var counter;
  var output = "";
  if (userVisits.length > 0) {
    output =
      `<div class="table" id= "${user.name}-table">` +
      `<H2>${user.name} visits</H2>` +
      "<table><tr><th>Name</th><th>Specialist</th><th>Estimated time</th><th>Later</th></tr>";

    for (let i = 0; i < userVisits.length; i++) {
      for (var spec of specialists) {
        if (userVisits[i].spec == spec.id) {
          specialist = spec;
          break;
        }
      }
      output +=
        "<tr><td>" +
        user.name +
        "</td><td>" +
        specialist.name +
        "</td><td> + " +
        timeFormat(userVisits[i].time) +
        "</td><td>" +
        ` <button type="button" class="later" id=${i}> Later</button>` +
        "</td></tr>";
    }
    output += "</table></div>";
    displayResources.innerHTML = output;
    //LATER BUTTONS ARRAY
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
  if (typeof window.localStorage.getItem("visits") !== undefined) {
    visits = JSON.parse(window.localStorage.getItem("visits"));
  }
  console.log(visits);
  for (var i = 0; i < visits.length; i++) {
    if (visits[i].user == thisLater.user && visits[i].spec == thisLater.spec) {
      visits.splice(i, 1);
      visits.push(thisLater);
      window.localStorage.setItem("visits", JSON.stringify(visits));
      console.log(visits);
      return;
    }
  }
}
