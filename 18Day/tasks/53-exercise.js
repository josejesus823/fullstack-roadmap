/*
53. Check 'a' and 'b' Separated by Exactly 3 Places
Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  
 */

function checkSeparateLetters(string) {
    let count = 0;
    for(let i = 0; i < string.length - 4; i++) {
    if(string[i] === "a" && string[i + 4] === "b" || string[i] === 'b' && string[i+4] === 'a'){
        count++;
    }
  }
  return (count === 1) ? true : false;
}

console.log(checkSeparateLetters("Chainsbreak"));
console.log(checkSeparateLetters("pane borrowed"));
console.log(checkSeparateLetters("abCheck"));
