var button = document.getElementsByClassName("button");
console.log(button);

var operand1 = 0;
var operand2 = null;
var operator = null;
var display = document.getElementById("display");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    console.log(this.getAttribute("data-value"));
    var value = this.getAttribute("data-value");
    switch (value) {
      case "+":
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = null;
        break;
      case "-":
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = null;
        break;
      case "*":
        operator = "*";
        operand1 = parseFloat(display.textContent);
        display.innerText = null;
        break;
      case "/":
        operator = "/";
        operand1 = parseFloat(display.textContent);
        display.innerText = null;
        break;
      case "%":
        operator = "%";
        operand1 = parseFloat(display.textContent);
        display.innerText = null;
        break;
      case "sign":
        operand1 = parseFloat(display.textContent);
        operand1 *= -1;
        display.innerText = operand1;
        break;
      case "AC":
        operand1 = 0;
        operand2 = null;
        operator = null;
        display.innerText = null;
        break;
      case "=":
        operand2 = parseFloat(display.textContent);
        display.innerText = operation(operator, operand1, operand2);
        operand1 = 0;
        operand2 = null;
        operator = null;
        break;
      default:
        display.innerText += value;
    }
  });
}

function operation(operator, operand1, operand2) {
  var res = null;
  if (operator === "%") {
    res = operand1 % operand2;
  } else if (operator === "/") {
    res = operand1 / operand2;
  } else if (operator === "*") {
    res = operand1 * operand2;
  } else if (operator === "+") {
    res = operand1 + operand2;
  } else if (operator === "-") {
    res = operand1 - operand2;
  }
  return res;
}
