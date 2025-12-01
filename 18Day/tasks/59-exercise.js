/*
59. Extract First Half of Even-Length String
Write a JavaScript program to extract the first half of a even string.  
 */

function extractFirstHalf(string){
    let newString = "";
    if(string.length % 2 === 0){
        const firstHalf = string.length / 2;
        newString = string.substring(0, firstHalf);
        return newString;
    }
    return string;
}

console.log(extractFirstHalf("Python"));  
console.log(extractFirstHalf("JavaScript")); 
console.log(extractFirstHalf("PHP"));