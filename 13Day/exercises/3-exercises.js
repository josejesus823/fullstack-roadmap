//Cree una funcion que recibe 2 parametros un numero y un string, el numero ingresado debe ser igual al string y que devuelva true cuando hagamos una igualacions estricta
//Nota:Use Casteos Explicitos

function valideTwoNumbers(string, number){
    if(number === Number(string)){
        return true;
    }
    return false;
}


console.log(valideTwoNumbers(2, "2"));
