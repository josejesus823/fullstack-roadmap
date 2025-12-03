/*
79. Check if Array Contains 30 and 40 Twice
Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. 
The array length should be 0, 1, or 2. 
 */
function contains30Or40(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === 30 || array[i] === 40){
            count++;
        }
    }

    return (count === 2);

}

console.log(contains30Or40([30, 30]));
console.log(contains30Or40([40, 40]));
console.log(contains30Or40([20, 20]));
console.log(contains30Or40([30]));

