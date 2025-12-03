/*
85. Split Array into Two Sums Alternating Elements

Write a JavaScript program to divide a given array of positive integers into two parts. 
First element belongs to the first part, second element belongs to the second part, 
and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.  
 */

function splitArray(array){
    const lenghtArr = array.length / 2;
    const firtMiddle = array.slice(0, lenghtArr);
    const secondMiddle = array.slice(lenghtArr);
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < array.length / 2; i++){
        if(i !== 1){
            sum1 += firtMiddle[i];
            sum2 += secondMiddle[i];
        }
        else{
            sum1 += secondMiddle[1];
            sum2 += firtMiddle[1];
        }
    }
    return [sum1, sum2];

}

console.log(splitArray([1,3,6,2,5,10]));