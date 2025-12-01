/*
48. Reverse a Given String

Write a JavaScript program to reverse a given string.  
Click me to see the solution
*/

function reverseString(string){
    let newStringReversed = "";
    for(let i = string.length -1; i >= 0; i--){
        // console.log(string[i]);
        newStringReversed += string[i];

        
    }
    return newStringReversed
}


console.log(reverseString("Welcome"));
console.log(reverseString("w3resource"));
console.log(reverseString("www"));
console.log(reverseString("JavaScript"));