var currentValue = "";
var display = document.getElementById("display");
 
function appendValue(value) {
  if (currentValue === "" && value !== ".") {
    currentValue = value;
  } else {
    currentValue = currentValue + value;
  }
  display.textContent = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.textContent = "0";
}

function deleteLast() {
  if (currentValue.length > 0) {
    currentValue = currentValue.slice(0, -1);
  }
  if (currentValue === "") {
    display.textContent = "0";
  } else {
    display.textContent = currentValue;
  }
}

function calculate() {
  if (currentValue === "") {
    return;
  }
 
  try {
    var result = eval(currentValue);
 
    if (result === undefined || result === null) {
      display.textContent = "Error";
      currentValue = "";
    } else {
      display.textContent = result;
      currentValue = String(result);
    }
 
  } catch (e) {
    display.textContent = "Error";
    currentValue = "";
  }
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
 
  if (key >= "0" && key <= "9") {
    appendValue(key);
  } else if (key === "+") {
    appendValue("+");
  } else if (key === "-") {
    appendValue("-");
  } else if (key === "*") {
    appendValue("*");
  } else if (key === "/") {
    event.preventDefault();
    appendValue("/");
  } else if (key === "%") {
    appendValue("%");
  } else if (key === ".") {
    appendValue(".");
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
