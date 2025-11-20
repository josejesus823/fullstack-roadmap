/**
 * create a function that receives an string
 * if the string has more than 30 characters
 * the function should return a truncated string with elipsis
 * that only contains 30 valid characters
 */
function truncatedString(str){
    const numOfChars = str.length;
    const elipsis = "...";
    if(numOfChars > 30){
        return str.slice(0, 30) + elipsis;
    }
    return str;
}
console.log(truncatedString("Lorem ipsum dolor sit amet consectetur adipiscing elit, curae ut erat morbi a risus"));
