/*
1. Oh nooo! nos acaban de informar que el doctor Luis Burbano realizo un robo en uno de nuestros 
centros medicos, 
por favor crea un script que nos de una lista de los hospitales en los que ha trabajado el 
doctor burbano para poder informar a los respectivos centros medicos y que ellos puedan realizar 
una investigacion.77
 */

const { readFileSync } = require('node:fs');
const medicalRaw = readFileSync('../medical_history.json', 'utf-8');
const medicalData = JSON.parse(medicalRaw);


function hospitalRobber(doctorName){
    const doctorNameCasted = doctorName.trim().split(" ").join("").toLowerCase();
    if(doctorNameCasted.length < 4) return "Invalid Doctor name";
    const hospitalWorked = [];
    for(const doctor of medicalData){
        const doctorMedicalCasted = doctor.doctor.trim().split(" ").join("").toLowerCase();
        if(doctorNameCasted === doctorMedicalCasted && (!(hospitalWorked.includes(doctor.hospitalName)))){
            hospitalWorked.push(doctor.hospitalName);
        }
    }
    return hospitalWorked;
}

console.log(hospitalRobber("Dr.      Luis Burbano"));