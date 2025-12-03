/*
89. Replace $ in Expression to Make True
Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
 */

function checkExpression(num1, num2, num3){
    return (num1 + num2 === num3 || num1 - num2 === num3 || num1 * num2 === num3 || num1 / num2 === num3);
}


console.log(checkExpression(10, 25, 35));
console.log(checkExpression(10, 25, 250));
console.log(checkExpression(30, 25, 5));
console.log(checkExpression(100, 25, 4.0));
console.log(checkExpression(100, 25, 25));