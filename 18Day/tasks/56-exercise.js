/*
56. Divide Numbers and Format with Commas
Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
 */
function divideAndFormat(num1, num2){
    if(num1 <= 0 || num2 <= 0){
        return 'error';
    }
    const result = num1 / num2;
    return result.toLocaleString();

}
console.log(divideAndFormat(1000000, 107));