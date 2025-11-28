/**
 * Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
 */

function multiplesOf3And7(number){
    if(number < 0 ){
        return "Only Positive Numbers";
    }
    if(number % 3 === 0 || number % 7 === 0){
        return `${number} is multiple of 3 or 7`;
    }
    else{
        return `${number} is not multiple of 3 or 7`;
    }
   
}

console.log(multiplesOf3And7(70));

