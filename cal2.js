const resultElement = document.getElementById("result");
const OPERATORS = ["+", "-", "*", "/"];

function dis(v) {
  resultElement.value += v;
}

function cal() {
  try {
    const result = Function('"use strict"; return (' + resultElement.value + ')')();
    resultElement.value = result;
  } catch (error) {
    resultElement.value = "Error";
    console.error("Calculation error:", error);
  }
}

function ere() {
  resultElement.value = resultElement.value.slice(0, -1);
}

function zer() {
  resultElement.value = "";
}

function perce() {
  const input = resultElement.value;
  const lastOperatorIndex = findLastOperator(input);
  
  if (lastOperatorIndex === -1) return;
  
  const operator = input[lastOperatorIndex];
  const value = parseFloat(input.slice(lastOperatorIndex + 1)) / 100;
  
  resultElement.value = input.slice(0, lastOperatorIndex + 1) + value;
}

function findLastOperator(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (OPERATORS.includes(str[i])) {
      return i;
    }
  }
  return -1;
}
