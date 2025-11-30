/*
44. Evaluate if Integer is =20 and Less Than Another

Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  
*/

function greatherOrEqual(num1, num2, num3){
    if(num1 >= 20 && (num1 < num2 || num1 < num3) || (num2 >= 20 && (num2 < num1 || num2 < num3)) || (num3 >= 20 && (num3 < num1 || num3 < num2))){
        return true;        
    }
    return false;
}

console.log(greatherOrEqual(23, 45, 10)); //true
console.log(greatherOrEqual(23, 23, 10)); //false
console.log(greatherOrEqual(21, 66, 75)); //true