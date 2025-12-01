/*
55. Check Equal Number of 'p's and 't's
Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  
*/
function checkEqualsPAndT(string){
    let countP = 0;
    let countT = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() === 'p') countP++;
        else if(string[i].toLowerCase() === 't')countT++;
    }
    return (countP === countT) ? true : false;
}

console.log(checkEqualsPAndT("Potapt"));
console.log(checkEqualsPAndT("paatpss"));
console.log(checkEqualsPAndT("paatps"));