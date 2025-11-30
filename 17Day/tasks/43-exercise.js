
/*
43. Check Rightmost Digits of Three Numbers
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
*/

function checkSameNumber(num1, num2, num3){
    const castNum1 = String(num1).at(-1);
    const castNum2 = String(num2).at(-1);
    const castNum3 = String(num3).at(-1);

    if(castNum1 !== castNum2 && castNum2 !== castNum3){
        return false;
    }
    else {
        return true;
    }
}


console.log(checkSameNumber(22,32,42));
console.log(checkSameNumber(102, 302, 2));
console.log(checkSameNumber(20,22,45));



