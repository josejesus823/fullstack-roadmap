/*
29. Check if Three Integers are in Range 50?99
Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
Return true if one or more of them are in the specified range.  
 */
function checkRangeNumbers(number1, number2, number3){

    if((number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99) || (number3 >= 50 && number3 <= 99)){
        return true;
    }
    else {
        return false;
    }
}

console.log(checkRangeNumbers(50, 90, 99));
console.log(checkRangeNumbers(5, 9, 199));
console.log(checkRangeNumbers(65, 89, 199));
console.log(checkRangeNumbers(65, 9, 199));