setInterval(function() {
  updateEstTimes();
}, 5000);

function updateEstTimes() {
  console.log("Updating visits est times");
  var visits = [];
  var specialists = [];
  if (typeof window.localStorage.getItem("visits") !== undefined) {
    visits = JSON.parse(window.localStorage.getItem("visits"));
  }
  if (typeof window.localStorage.getItem("specialists") !== undefined) {
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
  }
  if(visits==null)
    {
      return
    }
  visits.forEach(visit => {
    for (let i = 0; i < specialists.length; i++) {
      if (visit.spec == specialists[i].id) {
        visit.time = Math.round(
          parseInt(specialists[i].avgTime) * possitionInQueue(visits, visit)
        );
        console.log(
          parseInt(specialists[i].avgTime) * possitionInQueue(visits, visit)
        );
        if (specialists[i].currentTime > 0) {
          // console.log(Date.now() / 1000 - specialists[i].currentTime / 1000);
          visit.time -= Math.round(
            Date.now() / 1000 - specialists[i].currentTime / 1000
          );

          if (visit.time < 0) {
            visit.time = 0;
          }
        }
      }
    }
  });
  window.localStorage.setItem("visits", JSON.stringify(visits));
}
function possitionInQueue(visits, visit) {
  var count = 0;
  for (var i = 0; i < visits.length; i++) {
    if (visits[i] == visit) {
      break;
    }
    if (visits[i].spec == visit.spec) {
      count++;
    }
  }
  return count;
}
