function getId(array) {
  if (array.length >= 1) {
    return parseInt(array[array.length - 1].id) + 1;
  } else {
    return 0;
  }
}
