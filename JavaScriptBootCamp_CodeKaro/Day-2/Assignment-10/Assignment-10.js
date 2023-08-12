/*Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
*/

function multiplicationTable(n){
    let multiplication = 0;
    for(i=0; i<=10; i++){
    multiplication = n*i;
    console.log(n+" X "+i+"\t=", multiplication)
    }
}

let num = 4;
console.log(multiplicationTable(num))

