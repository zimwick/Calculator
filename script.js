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
  switch (operand) {
    case "+":
      add(val1, val2);
      break;
    case "-":
      subtract(val1, val2);
      break;
    case "*":
      multiply(val1, val2);
      break;
    case "/":
      divide(val1, val2);
      break;
    default:
      console.log("handle error");
  }
};

let val1 = "";
let val2;
let result;

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
const btnPlus = document.getElementById("+");
const btnEquals = document.querySelector(".equals-btn");

btn7.addEventListener("click", () => {
  val1 += String(7);
  input.value = val1;
});
btn8.addEventListener("click", () => {
  val1 += String(8);
  input.value = val1;
});
btn9.addEventListener("click", () => {
  val1 += String(9);
  input.value = val1;
});
btn4.addEventListener("click", () => {
  val1 += String(4);
  input.value = val1;
});
btn5.addEventListener("click", () => {
  val1 += String(5);
  input.value = val1;
});
btn6.addEventListener("click", () => {
  val1 += String(6);
  input.value = val1;
});
btn1.addEventListener("click", () => {
  val1 += String(1);
  input.value = val1;
});
btn2.addEventListener("click", () => {
  val1 += String(2);
  input.value = val1;
});
btn3.addEventListener("click", () => {
  val1 += String(3);
  input.value = val1;
});
btn0.addEventListener("click", () => {
  //keep from starting with 0
  if (val1 != 0) {
    val1 += String(0);
    input.value = val1;
  }
});
btnDecimal.addEventListener("click", () => {
  if (val1 == "") {
    val1 += "0.";
    input.value = val1;
  } else if (!val1.includes(".")) {
    val1 += ".";
    input.value = val1;
  }
});

btnDivide.addEventListener("click", () => {
  val2 = val1;
  val1 = "";
  input.value = val1;
  console.log(val2, val1);
});
