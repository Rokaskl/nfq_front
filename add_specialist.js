window.addEventListener("load", () => {
  var btn = document.querySelector("#new-spec-btn");
  var form = document.querySelector(".new-spec-form");
  var btnAdd = document.querySelector("#add-spec");

  btn.addEventListener("click", () => {
    form.style.opacity = "1";
  });
  btnAdd.addEventListener("click", () => {
    var specs = [];
    specs = JSON.parse(window.localStorage.getItem("specialists"));
    var spec = document.querySelector("#new-spec-name").value;
    if (spec.length < 3) {
      alert("Loooonger specialist's name please...");
      return false;
    }
    if (specs.includes(spec)) {
      alert("Already exists!");
      return false;
    }
    specs.push(spec);
    window.localStorage.setItem("specialists", JSON.stringify(specs));
    location.reload();
  });
});
