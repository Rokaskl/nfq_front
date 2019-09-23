function compareTime(a, b) {
  if (a.time < b.time) {
    return -1;
  }
  if (a.time > b.time) {
    return 1;
  }

  return 0;
}
function compareSpec(a, b) {
  if (a.spec < b.spec) {
    return -1;
  }
  if (a.spec > b.spec) {
    return 1;
  }
  return 0;
}
