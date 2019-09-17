$(document).ready(function() {
  $("#load-dummy").click(function() {
    var displayResources = $("#table");
    var Users = [];

    //Users = JSON.parse(window.localStorage.getItem("users"));

    if (displayResources.text == null) {
      displayResources.text("Loading data from JSON source...");
    }

    $.ajax({
      type: "GET",
      url: "dummy_users.json", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);
        result.forEach(user => {
          Users.push(user);
        });
        window.localStorage.setItem("users", JSON.stringify(Users));
      }
    });
  });
});
