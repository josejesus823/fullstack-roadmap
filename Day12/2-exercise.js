/**
 *  write a js function that receives an object and a string as parameters
 *  the function should remove the property that has the name of the string parameter
 *  from the object and return it.
 */

const user = {
  name: "Jose",
  age: 21,
  country: "Colombia"
};

function removePropertyFromObject(object, str){
    if(Object.keys(object).includes(str)){
        delete object[str]
        return object
    }
    else {
        return `The property ${str} doesn't exist in the object ${Object.keys(object)}`;
    }
}
console.log(removePropertyFromObject(user, "age"));



