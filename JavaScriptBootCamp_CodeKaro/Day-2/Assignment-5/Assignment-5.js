/* Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. 
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
*/

function primeNumbersUpto(limit) {
  let primeNumbers = [];

  for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor <= number / 2; divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(number);
    }
  }

  return primeNumbers;
}

let limit = 100;
let primes = primeNumbersUpto(limit);
console.log(primes);
