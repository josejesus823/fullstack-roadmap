/*
17. Difference Between Number and 19 (Triple if >19)
Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19.  
 */

function differenceBetween13(number){
    if(number < 19){
        return 19 - number;
    }
    else {
        return (number - 19) * 3;
    }
}

console.log(differenceBetween13(12));
console.log(differenceBetween13(19));
console.log(differenceBetween13(22));