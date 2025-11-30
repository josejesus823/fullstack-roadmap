/*
45. Check if Integer is 15, or Sum/Difference is 15
Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  
 */

function checkIfIs15(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    if(num1 === 15 || num2 === 15 || sum === 15 || diff === 15){
        return true;
    }
    return false
}

console.log(checkIfIs15(15, 9));
console.log(checkIfIs15(25, 15));
console.log(checkIfIs15(7, 8));
console.log(checkIfIs15(25, 10));
console.log(checkIfIs15(5, 9));
console.log(checkIfIs15(7, 9));
console.log(checkIfIs15(9, 25));