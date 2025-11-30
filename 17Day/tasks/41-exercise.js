/*
41. Return 30, 40, or 20 Based on Same Numbers
Write a JavaScript program to check a set of three numbers; 
if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40. 
 */

function threeNumbersSame(number1, number2, number3){
    if(number1 === number2 && number2 === number3){
        console.log(30);
    }
    else if(number1 === number2 || number1 === number3 || number2 === number3) {
        console.log(40);
    }
    else{
        console.log(20);
    }
}

threeNumbersSame(20, 20, 20);
threeNumbersSame(8, 8, 8);
threeNumbersSame(8, 8, 18);
threeNumbersSame(8, 7, 18);