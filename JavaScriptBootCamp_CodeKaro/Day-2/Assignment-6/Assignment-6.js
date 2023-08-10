/*Write a JavaScript function that simulates a simple calculator. 
The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
*/

function calculate(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1/num2;
  }
}

let x =100, y=25; operator = "/"
console.log(calculate(x,y,operator));