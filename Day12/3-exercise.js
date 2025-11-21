/**
 *  write a js function that receives an 
 * 1. object and two strings as parameters
 * 2. the function should add a property named as the second parameter and 
 *  the value of that property should be the third parameter.
 */

const user = {
  name: "Jose",
  age: 21,
  country: "Colombia"
};

function addPropertiesName(object, string1, string2){
    object[string1] = string2;
    return object
}

console.log(addPropertiesName(user, "jose", "no sabe"));
