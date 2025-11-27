/**
 * 15. Difference Between Number and 13
 * Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is broader than 13 return double the absolute difference.  
 */

function differenceBetween13(number){
    if(number < 13){
        return 13 - number;
    }
    else {
        return (number - 13) * 2;
    }
}

console.log(differenceBetween13(0));
console.log(differenceBetween13(14));
console.log(differenceBetween13(13));