/*
13. Create Variable with User-Defined Name
Write a JavaScript exercise to create a variable using a user-defined name.
 */

function varName(name){
    const var_name = 'abcd';
    const n = name;
    this[var_name] = n;

    console.log(this[var_name]);
}

varName("Jose");