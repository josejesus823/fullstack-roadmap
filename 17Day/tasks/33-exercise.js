/*
Check if Two Numbers are in Specific Ranges
Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 
 */

function checkSpecificRange(number1, number2){
    const isInRangeNumber1 = (number1 >= 40 && number1 <= 60) || (number1 >= 70 && number1 <= 100);
    const isInRangeNumber2 = (number2 >= 40 && number2 <= 60) || (number2 >= 70 && number2 <= 100);
    if(isInRangeNumber1 && isInRangeNumber2) {
        return "Ambos estan en rango"
    }
    else if(isInRangeNumber1 && isInRangeNumber2 === false){
        return `${number1} esta en rango`
    }
    else if(isInRangeNumber2 && isInRangeNumber1 === false){
        return `${number2} esta en rango`
    }
    else{
        return `Ninguno esta en rango`;
    }
}

console.log(checkSpecificRange(110, 150));