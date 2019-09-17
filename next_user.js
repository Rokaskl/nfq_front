window.addEventListener("load", () => {
  var bt = document.querySelector("#next-user");

  bt.addEventListener("click", () => {
    var users = JSON.parse(window.localStorage.getItem("users"));
    users.shift();
    window.localStorage.setItem("users", JSON.stringify(users));
  });
});
