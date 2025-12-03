/*
82. Add Two Integers Without Carrying
Write a JavaScript program to add two positive integers without carrying.  
 */

function twoIntegersWithoutCarrying(num1, num2){
    const array1 = Array.from(String(num1), Number);
    const array2 = Array.from(String(num2), Number);
    let numbersWithoutCarry = ''
    for(let i = 0; i < array1.length; i++){
        if(array1[i] + array2[i] > 9){
            const transformNumberString = String(array1[i] + array2[i]);
            numbersWithoutCarry += transformNumberString[0];
        }
        else{
            numbersWithoutCarry += String(array1[i] + array2[i]);
        }
    }
    return Number(numbersWithoutCarry);

}

console.log(twoIntegersWithoutCarrying(222,911));
console.log(twoIntegersWithoutCarrying(200,900));
