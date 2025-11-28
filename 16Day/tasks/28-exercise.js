
function checkRangeNumbers(number1, number2){

    if((number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99)){
        return true;
    }
    else {
        return false;
    }
}

console.log(checkRangeNumbers(100, 100));