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
function perce() {
  let x = document.getElementById("result").value;
  let y = x.length;
  var k;
  const z = ["+", "*", "-", "/"];
  let i = y - 1;
  loop1: for (i = y - 1; i > -1; i--) {
    loop2: for (var j = 0; j <= 3; j++) {
      if (x[i] == z[j]) {
        k = i;
        break loop1;
      } else {
        continue;
      }
    }
  }
  let md = x.substr(k + 1, y);
  md = md / 100;
  x = x.substr(0, k + 1);
  x = x.concat(md);
  document.getElementById("result").value = x;
}
