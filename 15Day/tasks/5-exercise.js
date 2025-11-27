/* 5. Rotate String 'w3resource' Periodically
Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.  
 */
function rotateStringToEnd(str){
    const wordLenght = str.length;
    let currentStr = str;
    for(let i = 0; i < wordLenght; i++){
        let getFirstLetter = currentStr[0];
        let newString = currentStr.slice(1);
        currentStr = newString + getFirstLetter;
        console.log(`rotacion ${(i + 1)} : ${currentStr}`);
    }
}

rotateStringToEnd("armadillo")
