/*
6. Check Leap Year (Gregorian Calendar)
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
 */

function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log("es bisiesto");
    } 
    else {
        console.log("No Es bisiesto");
    }
}

leapYear(2016); // Expected output: true
leapYear(2000); // Expected output: true
leapYear(1700); // Expected output: false
leapYear(1800); // Expected output: false
leapYear(100);  // Expected output: false