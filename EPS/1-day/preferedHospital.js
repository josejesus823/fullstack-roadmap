

/*
4. Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado, 
para esto crea una funcion llamada userPreferredHospital que reciba como parametro el nombre de un usuario y 
retorne el nombre del hospital de preferencia.
*/

const { readFileSync } = require('node:fs');
const usersRaw = readFileSync('../user-database.json', 'utf-8');
const medicalRaw = readFileSync('../medical_history.json', 'utf-8');


const datosJson = JSON.parse(usersRaw);
const medicalData = JSON.parse(medicalRaw);


const hospitalPreferred = {}
function userPreferredHospital(userName){
    if(!userName || userName.length < 4) return "Invalid Username"
    const userCasted = userName.trim().split(" ").join("").toLowerCase();
    let userId = "";
    for(const user of datosJson){
        const fullUsername = (user.firstName + user.lastName).toLowerCase(); 
        if(userCasted === fullUsername){
            userId = user.userId;
        }
    }

    for(const userMedical of medicalData){
        if(userId === userMedical.userId){
            if(!(userMedical.hospitalName in hospitalPreferred)){
                hospitalPreferred[userMedical.hospitalName] = 1;
            }
            else{
                hospitalPreferred[userMedical.hospitalName]++;
            }
        }
    }
    const keyOfMax = Object.keys(hospitalPreferred).reduce((maxKey, currentKey) => {
        return hospitalPreferred[currentKey] > hospitalPreferred[maxKey] ? currentKey : maxKey;
    });
    return keyOfMax;
}

console.log(userPreferredHospital("Andrés Gómez"));

