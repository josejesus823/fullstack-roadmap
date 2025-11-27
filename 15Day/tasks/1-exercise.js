/* 1. Display Current Day and Time
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function currentDayAndTime(){
    const daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date();
    const day = date.getDay();
    let hour = date.getHours();
    const pmOrAM = (hour >= 12) ? "PM" : "AM";
    hour = (hour >= 12) ? hour - 12 : hour;
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    
    console.log(`Today is : ${daysNames[day]}.`);
    console.log(`Current time is : ${hour} ${pmOrAM} : ${minute} : ${seconds} `);
}

currentDayAndTime();
