/*Assignment 8:
Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. 
A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
*/

let divisors = [];
let sum = 0;
function isPerfectNumber(n){
    for(i=0; i<n; i++){
        if(n%i === 0){
            divisors.push(i);
        }
    }
    for(j=0; j<divisors.length; j++){ 
        sum = divisors[j]+sum;
    }
    if (sum == n){
        console.log(n +" is a PERFECT number")
    }else{
        console.log(n +" is a NOT a PERFECT number")
    }
    // console.log(divisors+" are the divisors of "+ n);
    // console.log("Sum of divisors: "+sum)

}

let x= 28;
console.log(isPerfectNumber(x));