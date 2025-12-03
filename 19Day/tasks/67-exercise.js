/*
67. Remove First/Last 'P' Characters in String
Write a JavaScript program to create a new string from a given string. 
This program removes the first and last characters of the string if the first or last character is 'P'. 
Return the original string if the condition is not satisfied
 */

function removeFirstAndLastLetter(string){
    return (string[0] === 'P' || string[string.length - 1] === 'P') 
    ? string.substring(1, string.length - 1) : string;
}

console.log(removeFirstAndLastLetter("PythonP"));
console.log(removeFirstAndLastLetter("Python"));
console.log(removeFirstAndLastLetter("JavaScript"));