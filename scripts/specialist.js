window.addEventListener("load", () => {
  var bt = document.querySelector("#next-user");
  var displayResources = document.querySelector("#tables");
  var _spec = document.querySelector("#select-spec");

  var users = [];
  var visits = [];
  var specialists = [];
  var specialist;
  var output = "";
  var user = {};

  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }
  if (typeof window.localStorage.getItem("specialists") !== undefined) {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
  }
  if (typeof window.localStorage.getItem("visits") !== undefined) {
    visits = JSON.parse(window.localStorage.getItem("visits"));
  }
  specialists.forEach(el => {
    var tmp = document.createElement("option");
    tmp.setAttribute("id", el.id);
    tmp.text = el.name;
    _spec.add(tmp);
  });

  function update() {
    if (_spec.selectedIndex > 0) {
      for (const el of specialists) {
        if (el.id == parseInt(_spec.selectedIndex) - 1) {
          specialist = el;
          if (el.currentTime == 0) {
            el.currentTime = Date.now();
          }
          window.localStorage.setItem(
            "specialists",
            JSON.stringify(specialists)
          );

          break;
        }
      }

      var emtyOutput = `<div class="table"><H1>${specialist.name}</H1><table><tr><th>User ID</th><th>Name</th><th>Estimated time</th></table></div>`;
      output = "";

      output +=
        `<div class="table"><H1>${specialist.name}</H1>` +
        "<table><tr><th>User ID</th><th>Name</th><th>Estimated time</th>";
      visits.forEach(visit => {
        if (visit.spec == specialist.id) {
          for (var el of users) {
            if (visit.user == el.id) {
              user = el;
              break;
            }
          }

          output +=
            "<tr><td>" +
            user.id +
            "</td><td>" +
            user.name +
            "</td><td> + " +
            timeFormat(visit.time) +
            "</td></tr>";
        }
      });
      output += "</table></div>";
      displayResources.innerHTML = output;
    } else {
      displayResources.innerHTML = " ";
      bt.style.opacity = 0;
    }
    if (output != emtyOutput && specialists.includes(specialist)) {
      bt.style.opacity = 1;
    }
  }

  bt.addEventListener("click", () => {
    for (var i = 0; i < visits.length; i++) {
      if (visits[i].spec == specialist.id) {
        visits.splice(i, 1);
        window.localStorage.setItem("visits", JSON.stringify(visits));
        //Counting average time

        specialist.avgTime = Math.round(
          ((parseInt(specialist.avgTime) * parseInt(specialist.served)) +
            (Date.now()/1000 - specialist.currentTime/1000)) /
            (specialist.served + 1)
        );

        specialist.currentTime = Date.now();
        specialist.served++;

        for (let i = 0; i < specialists.length; i++) {
          if (specialists[i].id == specialist.id) {
            specialists[i] = specialist;
          }
        }

        window.localStorage.setItem("specialists", JSON.stringify(specialists));
        update();
        return;
      }
    }
  });

  _spec.addEventListener("change", () => {
    update();
  });
});
