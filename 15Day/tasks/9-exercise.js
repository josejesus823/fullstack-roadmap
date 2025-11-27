/*
9. Days Left Before Christmas
Write a JavaScript program to calculate the days left before Christmas.
 */

function daysToChristmas(){
    const today = new Date();
    let christmas = new Date(today.getFullYear(), 11, 25);

    if(today.getMonth() === 11 && today.getDate() > 25){
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const milisecondsDays = 1000 * 60 * 60 * 24;
    const diffMs = christmas.getTime() - today.getTime();

    const daysUntilChristmas = diffMs / milisecondsDays;

    console.log(daysUntilChristmas);
}

daysToChristmas();