/*
88. Check Similarity of Two Integers with Divisor
Write a JavaScript program that takes two integers and a divisor. 
If the given divisor divides both integers and does not divide either, two specified integers are similar. 
Check whether two integers are similar or not.  
 */

function similarDivisor(num1, num2, divisor){
    return (num1 % divisor === 0 && num2 % divisor === 0)
}

console.log(similarDivisor(10, 25, 5))
console.log(similarDivisor(10, 20, 5))
console.log(similarDivisor(10, 20, 4))