/*
21. Add 'Py' to Start of String if Not Present
Write a JavaScript program to create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string.  
 */
function addingPyString(string){
    const stringSpacesTrimmed = string.trim();
    const firstTwoCharacters = stringSpacesTrimmed.slice(0,2);
    if(firstTwoCharacters.toLowerCase() === 'py'){
        return stringSpacesTrimmed;
    }
    else{
        return "Py" + stringSpacesTrimmed;
    }
}

console.log(addingPyString("   S "));