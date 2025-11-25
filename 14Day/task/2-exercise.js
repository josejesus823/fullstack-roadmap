/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.  
 */
function check50Numbers(num1, num2){
    const sum = num1 + num2;
    if(num1 === 50 || num2 === 50 || sum === 50){
        return true;
    }
    return false;
}

console.log(check50Numbers(25, 0));