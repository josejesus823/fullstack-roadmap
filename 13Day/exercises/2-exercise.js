//Cree una funcion que reciba 1 parametro, si el parametro es entero, casteelo a string, de lo contrario, retorne que el parametro por defecto es un String
function validateParam(param1){
    if(typeof param1 === "number"){
        return String(param1);
    }
    else{
        return "El parametro por defecto es un String"
    }
}

console.log(validateParam("2"));