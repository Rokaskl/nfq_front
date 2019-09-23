//Returns ID of the user
function findOrCreate(users, _name) {
  var found = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() == _name.toLowerCase()) {
      found = true;
      return users[i].id;
    }
  }
  if (!found) {
    var newUser = {
      id: getId(users),
      name: _name
    };
    users.push(newUser);
    window.localStorage.setItem("users", JSON.stringify(users));
    return newUser.id;
  }
}
