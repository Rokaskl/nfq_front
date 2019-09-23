function timeFormat(sec) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  hours = Math.floor(sec / 3600);
  sec %= 3600;
  minutes = Math.floor(sec / 60);
  seconds = sec % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}
