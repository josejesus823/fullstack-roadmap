/*
36. Check if Last Digit of Three Integers is Same
Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
 */
function checkLastDigit(num1, num2, num3){
    if(num1 > 0 && num2 > 0 && num3 > 0){
        const num1Casted = String(num1).at(-1);
        const num2Casted = String(num2).at(-1);
        const num3Casted = String(num3).at(-1);
        if(num1Casted === num2Casted && num2Casted === num3Casted)return true;
        return false;
    }
    else {
        return false;
    }

}

console.log(checkLastDigit(20, 30, 401));
console.log(checkLastDigit(-20, 30, -40));
console.log(checkLastDigit(20, -30, 400));
console.log(checkLastDigit(20, 30, -400));