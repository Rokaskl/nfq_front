window.addEventListener("load", () => {
  var btn = document.querySelector("#new-spec-btn");
  var form = document.querySelector(".new-spec-form");
  var btnAdd = document.querySelector("#add-spec");

  btn.addEventListener("click", () => {
    form.style.opacity = "1";
  });

  btnAdd.addEventListener("click", () => {
    var specialists = [];
    specialists = JSON.parse(window.localStorage.getItem("specialists"));
    var specName = document.querySelector("#new-spec-name").value;

    if (specName.length < 3) {
      alert("Loooonger specialist's name please...");
      return false;
    }
    //Check if specialist with the same name dont exist
    specialists.forEach(el => {
      if (el.name.toLowerCase() == specName.toLowerCase()) {
        alert("Specialist with this name already exists");
        return false;
      }
    });
    var newSpecialist = {
      id: getId(specialists),
      name: specName,
      avgTime: "0",
      served: "0"
    };

    specialists.push(newSpecialist);
    window.localStorage.setItem("specialists", JSON.stringify(specialists));
    console.log("New specialist " + specName + " was added successfully");
    location.reload();
  });
});
