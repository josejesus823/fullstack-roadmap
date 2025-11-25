/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.  
 */

function calculateSumOfTwoNumbers(number1, number2){
    const sum = number1 + number2;
    if(number1 === number2){
        return sum * 3;
    }
    return sum;
}

console.log(calculateSumOfTwoNumbers(3, 3));  
