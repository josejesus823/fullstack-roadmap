/*
34. Find Larger Number in Range 40?60
Write a JavaScript program to find the largest number from the two given positive integers. 
The two numbers are in the range 40..60 inclusive.  
 */

function findLargerNumber(num1, num2){
    const isInRangeNum1 = (num1 >= 40 && num1 <= 60);
    const isInRangeNum2 = (num2 >= 40 && num2 <= 60);
    if(isInRangeNum1 && isInRangeNum2 && num1 === num2){
        return "Ambos estan en el rango y son iguales"
    }
    if(isInRangeNum1 && num1 > num2){
        return `${num1} es mayor`
    }
    else if(isInRangeNum2 && num2 > num1){
        return `${num2} es mayor`
    }
    else{
        return "Ninguno esta en el rango"
    }
}

console.log(findLargerNumber(30, 30));