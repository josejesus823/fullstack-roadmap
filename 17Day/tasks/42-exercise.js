/*
42. Check Numbers in Strict or Soft Increasing Mode
Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
 */

function checkNumberStrictOrSoft(num1, num2, num3){
    if(num2 > num1 && num3 > num2){
        return `strict mode`;
    }
    else if ( num3 > num2){
        return `soft mode`;
    }
}

console.log(checkNumberStrictOrSoft(10, 15, 31));
console.log(checkNumberStrictOrSoft(24, 22, 31));
