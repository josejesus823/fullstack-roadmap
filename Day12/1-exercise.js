// write a js function that returns all the properties names of an Object
const user = {
  name: "Jose",
  age: 21,
  country: "Colombia"
};

function getAllPropertiesNames(object) {
   return Object.keys(object);
}

console.log(getAllPropertiesNames(user));

