/*
Write a JavaScript function that takes a string as a parameter and counts the number of 
vowels (a, e, i, o, u) in the string.
*/

const vowels = ["a","e","i","o","u","A","E","I","O","U"];


function vowelCount(word){
    let count = 0;
    for (i=0; i<word.length; i++){
        for(j=0; j<vowels.length; j++){
            if(word[i]===vowels[j]){
                count++;
            }
        }
    }
    return count;
}

let x = "Shaik Shameer"
console.log(vowelCount(x));



