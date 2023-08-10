// Assignment 2:
/* Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. 
The factorial of a number N is the product of all positive integers less than or equal to N.*/

function factorial(x){
    let value = 0;
    for(let i=1; i<x; i++){
        value = i*x + value;
    }
    return value;
   
}

let x = prompt("Enter Positive Number")
console.log(factorial(x));