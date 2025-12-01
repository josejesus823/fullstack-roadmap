/*46. Check if Only One Integer is Multiple of 7 or 11

Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. */

function isMultiple7Or11(num1, num2){
    const isMultipleNum1 = (num1 % 7 === 0 || num1 % 11 === 0);
    const isMultipleNum2 = (num2 % 7 === 0 || num2 % 11 === 0);

    if(isMultipleNum1 && isMultipleNum2){
        return false;
    }
    else if(isMultipleNum1 && !isMultipleNum2 || !isMultipleNum1 && isMultipleNum2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isMultiple7Or11(14, 21));
console.log(isMultiple7Or11(14, 20));
console.log(isMultiple7Or11(16, 20));
console.log(isMultiple7Or11(16, 21));
