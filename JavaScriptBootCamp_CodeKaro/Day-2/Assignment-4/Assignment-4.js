/*
Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward 
(ignoring spaces, punctuation, and capitalization).*/


function palindrome(string)
{
    let backwardWord = "";
    for(let i=0; i<string.length; i++){
       backwardWord = string[i] +backwardWord;
    }
    if (string === backwardWord) {
        console.log("Palindrome");
      } else {
        console.log("Not a palindrome");
      }
    return backwardWord;
    
}

let x = "mom", y= "Shaik Shameer"
console.log(palindrome(x))
console.log(palindrome(y))