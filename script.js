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

let newVal = "";
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
  newVal += String(7);
  input.value = newVal;
});
btn8.addEventListener("click", () => {
  newVal += String(8);
  input.value = newVal;
});
btn9.addEventListener("click", () => {
  newVal += String(9);
  input.value = newVal;
});
btn4.addEventListener("click", () => {
  newVal += String(4);
  input.value = newVal;
});
btn5.addEventListener("click", () => {
  newVal += String(5);
  input.value = newVal;
});
btn6.addEventListener("click", () => {
  newVal += String(6);
  input.value = newVal;
});
btn1.addEventListener("click", () => {
  newVal += String(1);
  input.value = newVal;
});
btn2.addEventListener("click", () => {
  newVal += String(2);
  input.value = newVal;
});
btn3.addEventListener("click", () => {
  newVal += String(3);
  input.value = newVal;
});
btn0.addEventListener("click", () => {
  //keep from starting with 0
  if (newVal != 0) {
    newVal += String(0);
    input.value = newVal;
  }
});
btnDecimal.addEventListener("click", () => {
  if (newVal == "") {
    newVal += "0.";
    input.value = newVal;
  } else if (!newVal.includes(".")) {
    newVal += ".";
    input.value = newVal;
  }
});

btnDivide.addEventListener("click", () => {});

btnAdd.addEventListener("click", () => {});

btnMultiply.addEventListener("click", () => {});

btnSubtract.addEventListener("click", () => {});

btnEquals.addEventListener("click", () => {});
