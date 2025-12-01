/*
51. Transform Number to Hours and Minutes
Write a JavaScript application that transforms a provided numerical value into hours and minutes.  
 */
function transformTime(num){
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours} : ${minutes}`;
}


console.log(transformTime(71));
console.log(transformTime(450));
console.log(transformTime(1441)); 