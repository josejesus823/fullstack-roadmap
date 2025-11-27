/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */

function celsiusToFarenheit(temperatura){
    const cTemp = temperatura;
    const cToFarenheit = cTemp * 9 / 5 + 32;
    return `${cTemp} is ${cToFarenheit} in Farenheit`;
}

function farenheitToCelsius(temperatura){
    const fTemp = temperatura;
    const fToCelsius = (fTemp - 32) * 5 / 9;
    return `${fTemp} is ${fToCelsius} in celsius`
}

console.log(celsiusToFarenheit(60));
console.log(farenheitToCelsius(45));