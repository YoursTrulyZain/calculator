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

function selectNumber(e){

    if(currentNumber.length == 9){
      return;
    }
  
    currentNumber += e.target.id;
    uiRow2.innerHTML = currentNumber;
  
  }

  function selectZero(){

    if(currentNumber.length == 9){
      return;
    }
    if(currentNumber == "0"){
      return;
    }else{
      currentNumber += "0";
      uiRow2.innerHTML = currentNumber;
    }
  
  }

  function selectOperator(e){

    previousNumber = currentNumber;
    operator = e.target.id;
    currentNumber = "";
    uiRow1.innerHTML = `${previousNumber} ${e.target.textContent}`;
    uiRow2.innerHTML = currentNumber;
  
  }