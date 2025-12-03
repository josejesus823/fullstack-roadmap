/*
63. Extract Middle 3 Characters from Odd-Length String
Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
The string length must be greater than or equal to three.  
 */

function extractMiddle3Characters(string){
    if(string.length % 2 !== 0){
        const halfLengthString = string.length / 2;
        const firstHalf = string.substring(0, halfLengthString);
        const secondHalf = string.substring(halfLengthString);
        return firstHalf.at(-1) + secondHalf.substring(0,2);
    }
    else {
        return string
    }
}

console.log(extractMiddle3Characters('abcdefg'));
console.log(extractMiddle3Characters('HTML5'));
console.log(extractMiddle3Characters('Python'));
console.log(extractMiddle3Characters('PHP'));
console.log(extractMiddle3Characters('Exercises')); 