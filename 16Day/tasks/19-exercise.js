/*
19. Check if Integer is Within 20 of 100 or 400
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
 */

function checkIntegerWithIn20Or400(number){
    const difference100 = Math.abs(number - 100), difference400 = Math.abs(number - 400);
    if(difference100 <= 20 || difference400 <= 20){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

checkIntegerWithIn20Or400(10);
checkIntegerWithIn20Or400(90);
checkIntegerWithIn20Or400(390);
checkIntegerWithIn20Or400(421);