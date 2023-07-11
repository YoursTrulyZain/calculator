let previousNumber = "";
let currentNumber = "";
let operator = "";
const uiRow1 = document.querySelector("#row1");
const uiRow2 = document.querySelector("#row2");

const numbers = document.querySelectorAll(".button-digit");
numbers.forEach((number) => number.addEventListener("click", selectNumber));

const operators = document.querySelectorAll(".button-operator");
operators.forEach((operator) => operator.addEventListener("click", selectOperator));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", selectClear);

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", selectZero);

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", selectDelete);

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", selectEqual);

const decimalButton = document.querySelector("#dec");
decimalButton.addEventListener("click", selectDecimal);