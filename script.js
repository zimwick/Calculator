"use strict";

const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const multiply = function (val1, val2) {
  return val1 * val2;
};

const divide = function (val1, val2) {
  return val1 / val2;
};

const operate = function (val1, operand, val2) {
  val1 = Number(val1);
  val2 = Number(val2);

  switch (operand) {
    case "+":
      return add(val1, val2);
    case "-":
      return subtract(val1, val2);
    case "*":
      return multiply(val1, val2);
    case "/":
      return divide(val1, val2);
    default:
      console.log("handle error");
  }
};

const handleChain = function (newOperand) {
  if (oldVal && inputVal) {
    oldVal = operate(oldVal, operand, inputVal);
    input.value = oldVal;
    inputVal = "";
    operand = newOperand;
  } else {
    oldVal = inputVal;
    inputVal = "";
    operand = newOperand;
    input.value = "";
  }
};

let inputVal = "";
let oldVal = "";
let operand = "";

const input = document.getElementById("in-value");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btnDivide = document.getElementById("divide");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btnMultiply = document.getElementById("multiply");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btnSubtract = document.getElementById("subtract");
const btnClear = document.getElementById("clear");
const btn0 = document.getElementById("0");
const btnDecimal = document.getElementById(".");
const btnAdd = document.getElementById("+");
const btnEquals = document.querySelector(".equals-btn");

btn7.addEventListener("click", () => {
  inputVal += String(7);
  input.value = inputVal;
});
btn8.addEventListener("click", () => {
  inputVal += String(8);
  input.value = inputVal;
});
btn9.addEventListener("click", () => {
  inputVal += String(9);
  input.value = inputVal;
});
btn4.addEventListener("click", () => {
  inputVal += String(4);
  input.value = inputVal;
});
btn5.addEventListener("click", () => {
  inputVal += String(5);
  input.value = inputVal;
});
btn6.addEventListener("click", () => {
  inputVal += String(6);
  input.value = inputVal;
});
btn1.addEventListener("click", () => {
  inputVal += String(1);
  input.value = inputVal;
});
btn2.addEventListener("click", () => {
  inputVal += String(2);
  input.value = inputVal;
});
btn3.addEventListener("click", () => {
  inputVal += String(3);
  input.value = inputVal;
});
btn0.addEventListener("click", () => {
  //keep from starting with 0
  if (inputVal != "0") {
    inputVal += String(0);
    input.value = inputVal;
  }
});
btnDecimal.addEventListener("click", () => {
  if (inputVal == "") {
    inputVal += "0.";
    input.value = inputVal;
  } else if (!inputVal.includes(".")) {
    inputVal += ".";
    input.value = inputVal;
  }
});

btnDivide.addEventListener("click", () => {
  handleChain("/");
});

btnAdd.addEventListener("click", () => {
  handleChain("+");
});

btnMultiply.addEventListener("click", () => {
  handleChain("*");
});

btnSubtract.addEventListener("click", () => {
  handleChain("-");
});

btnEquals.addEventListener("click", () => {
  input.value = operate(oldVal, operand, inputVal);
});
