window.addEventListener("load", () => {
  updateUsers();
  setInterval(function() {
    updateUsers();
  }, 5000);
});
//NOT working for some reason :'(
window.addEventListener("storage", () => {
  updateUsers();
});
/////////////////////////////////
function updateUsers() {
  console.log("Updating table");
  var displayResources = document.querySelector("#tables");

  var specialists = [];
  var users = [];
  var visits = [];
  var output = "";
  var user = {};
  var specialist = {};
  var tableSize = 20;

  if (typeof window.localStorage.getItem("users") !== undefined) {
    users = JSON.parse(window.localStorage.getItem("users"));
  }

  if (typeof window.localStorage.getItem("specialists") !== undefined) {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
  }
 
  if (typeof window.localStorage.getItem("visits") !== undefined) {
    visits = JSON.parse(window.localStorage.getItem("visits"));
    if(visits==null)
    {
      return
    }
    visits.sort(compareTime);
    if (tableSize > visits.length) {
      tableSize = visits.length;
    }
    visits.splice(tableSize, visits.length - tableSize);
    visits.sort(compareSpec);
  }
  else{
    return;
  }
  output +=
    `<div class="table" = >` +
    "<table><tr><th>User ID</th><th>Name</th><th>Specialist</th><th>Estimated time</th>";
  //DELET current table
  displayResources.innerHTML = "";
  /////////////////////
  for (var i = 0; i < tableSize; i++) {
    for (var el of users) {
      if (el.id == visits[i].user) {
        user = el;
        break;
      }
    }

    for (var el of specialists) {
      if (el.id == visits[i].spec) {
        specialist = el;
        break;
      }
    }

    output +=
      "<tr><td>" +
      user.id +
      "</td><td>" +
      user.name +
      "</td><td>" +
      specialist.name +
      "</td><td>" +
      timeFormat(visits[i].time);
    ("</td></tr>");
  }
  output += "</table></div>";

  displayResources.innerHTML += output;
  markCurrent();
}
function markCurrent() {
  var tempSpec = " ";
  var table = document.querySelector("table");
  for (var i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[2].innerText != tempSpec) {
      table.rows[i].setAttribute("class", "current");
      table.rows[i].cells[3].innerText = "now";
      tempSpec = table.rows[i].cells[2].innerText;
    }
  }
}
