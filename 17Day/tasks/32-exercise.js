/*
 32. Find Closest Value to 100 from Two Numbers
Write a JavaScript program to find the closest value to 100 from two numerical values.   
 */

function closestValueTo100(num1, num2){
    let absoluteNum1 = Math.abs(num1 - 100), absoluteNum2 = Math.abs(num2 - 100);
    return (absoluteNum1 > absoluteNum2) ?  `${num2} is closest to 100`: `${num1} is closest to 100`;  

}

console.log(closestValueTo100(110, 109));