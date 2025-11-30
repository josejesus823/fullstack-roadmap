/*35. Check Character Between 2nd and 4th Positions in String
Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.*/

function checkChartInOtherPosition(string, char){
    let status = 0
    for(let i = 0; i < string.length; i++){
        if((i >= 1 && i <= 3) && (string[i] === char)){
            status = 1;
            break;
        }
    }

    if(status === 1) return true;
    else return false;
}



console.log(checkChartInOtherPosition("Python", "y"));
console.log(checkChartInOtherPosition("JavaScript", "a"));
console.log(checkChartInOtherPosition("Console", "o"));
console.log(checkChartInOtherPosition("Console", "C"));
console.log(checkChartInOtherPosition("Console", "e"));
console.log(checkChartInOtherPosition("JavaScript", "S"));