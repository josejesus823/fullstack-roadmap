//cree una funcion que reciba 2 numeros, los castee a string, los sume y el resultados los entregue en enteros o numeros
function transformTwoNumbers(number1, number2){
    number1 = String(number1);
    number2 = String(number2);
    const sumOfNumbers = number1 + number2;
    return Number(sumOfNumbers);
}

console.log(transformTwoNumbers(1,2));