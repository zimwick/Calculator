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
