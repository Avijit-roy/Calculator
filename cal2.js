function dis(v) {
  document.getElementById("result").value += v;
}
function cal() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
function ere() {
  let x = document.getElementById("result").value;
  let y = x.length;
  document.getElementById("result").value = x.substr(0, y - 1);
}
function zer() {
  document.getElementById("result").value = "";
}
