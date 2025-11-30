/*
40. Check if Integer is 8 or Difference/Sum Equals 8
Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
 */

function checkIfIs8(num1, num2){
    if(num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8)return true;
    return false;
}

console.log(checkIfIs8(7, 8));
console.log(checkIfIs8(16, 8));
console.log(checkIfIs8(24, 32));
console.log(checkIfIs8(17, 18));