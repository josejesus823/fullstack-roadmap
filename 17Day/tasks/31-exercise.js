/**
31. Find Largest of Three Integers
Write a JavaScript program to find the largest of three given integers.  
 */

function largestNumber(num1, num2, num3){
    let max_num = (num1 > num2) ? num1 : num2;
    max_num = (num3 > max_num) ? num3 : max_num;
    return max_num;
}

console.log(largestNumber(0,20,20));