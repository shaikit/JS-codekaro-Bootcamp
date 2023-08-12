/*Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. 
The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
*/

function FibonacciSeriesUpto(x){
    let FibonacciSeries = [0,1]
    let sumOfLastTwo =0;
    for(i=1; i<x; i++){
        sumOfLastTwo= FibonacciSeries[FibonacciSeries.length-1]+FibonacciSeries[FibonacciSeries.length-2]
        if(sumOfLastTwo > x){
            break;
        }
        FibonacciSeries.push(sumOfLastTwo)
}
        console.log(FibonacciSeries)
}

let num = 100
console.log(FibonacciSeriesUpto(num));
