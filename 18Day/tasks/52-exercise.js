/*
52. Sort Letters Alphabetically in Strings
Write a JavaScript program to convert letters of a given string alphabetically.  
 */

function lettersSorted(word){
    const arrayWords = word.split("");
    return arrayWords.sort().join("");
}

console.log(lettersSorted("Python"));
console.log(lettersSorted("Exercises"));