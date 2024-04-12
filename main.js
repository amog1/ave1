// Average calculator

// evant listner
document.getElementById("calc-btn").addEventListener("click", calcAverage);
// Event Function
function calcAverage() {
  // input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  //  process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remain = num1 % num2;
  let power = num1 ** num2;
  let decimal = num1;
  let dec = decimal.toFixed(2);
  let tangent = num3;
  let random1 = Math.random() * num1;
  // output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("pro-out").innerHTML = product;
  document.getElementById("remain-one").innerHTML = remain;
  document.getElementById("power2").innerHTML = power;
  document.getElementById("2decimal").innerHTML = dec;
  document.getElementById("tanget3").innerHTML = Math.tan(tangent);
  document.getElementById("random").innerHTML = random1;
}
//
