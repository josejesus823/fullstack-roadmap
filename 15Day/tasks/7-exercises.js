/* 7. Find Years When Jan 1 is Sunday (2014?2050)

Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.*/  
function janOneIsSunday(){
    for(let i = 2014; i <= 2050; i++){
        const date = new Date(i, 0);
        // console.log(date);
        if(date.getDay() === 0) {
            console.log("El primero es domingo", i);
        }
    }
}

janOneIsSunday()