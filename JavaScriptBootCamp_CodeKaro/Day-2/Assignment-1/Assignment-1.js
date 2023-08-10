// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function number(x){
    if(x < 0){
        console.log("negative")
    }else if(x > 0){
        console.log("positive")
    }else{
        console.log("zero")
    }
    return x;
}
let x = prompt("Enter Number")
console.log(number(x));