
function whoServed(player1, player2, pointsP1, pointsP2){
    const max_points = 11;
    if(pointsP1 + pointsP2 === 0){
        console.log(`saca ${player1}`)
    }
    else if(pointsP1 < max_points && pointsP2 < max_points){
        const totalPoints = Math.floor((pointsP1 + pointsP2) / 2);
        const playerServer = ( totalPoints % 2 === 0 ) ? `served ${player1}` : `served ${player2}`;
        console.log(playerServer);
    }
    else if(pointsP1 > max_points || pointsP2 > max_points){
        console.log("You can't have more points of max");
    }
    else {

        const winner = (pointsP1 === 11) ? `${player1} Won` : `${player2} Won`;
        console.log(winner);
    }
}


//

whoServed("Sebas", "Jose", 10, 7);
