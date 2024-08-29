let firstNumber;
let secondNumber;
let operand;

function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
return a / b;
}

const operate = function (firstNumber, secondNumber, operand) {
    let result = 0;
  
    switch (operand) {
      case "+":
        result = add(firstNumber, secondNumber);
        break;
      case "-":
        result = subtract(firstNumber, secondNumber);
        break;
      case "*":
        result = multiply(firstNumber, secondNumber);
        break;
      case "/":
        result = divide(firstNumber, secondNumber);
        break;
      default:
        return "Error operator";
    }
  
    return result;
  };

