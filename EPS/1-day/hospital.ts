/*
3. necesitamos obtener una lista de usuarios que han visitado un hospital dado, 
para esto crea una funcion llamada hospitalUsers que reciba como parametro el nombre del hospital y 
que retorne un array con el nombre COMPLETO de los usuarios que han visitado ese hospital ej:

    ["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]
 */


import { readFileSync } from 'node:fs';
import dataJson from '../user-database.json';


interface userData {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    email: string;
}

interface MedicalData {
    serviceId: string;
    userId: string;
    date: string;
    hospitalName: string
    medicalNotes: string;
    doctor: string;
    speciality: string;
    medicationsUsed: string[];
}

const raw = readFileSync("../medical_history.json", "utf-8");
const medicalData = JSON.parse(raw) as MedicalData[];
const datosJson: userData[] = dataJson;


function hospitalUsers(hospitalName: string){
    const hospitalCasted: string = hospitalName.trim().split(" ").join("").toLowerCase();
    const usersFound: string[] = [];
    if(hospitalCasted.length < 5) return "Hospital name invalid"
    for(const hospitalName of medicalData){
        const hospitalMedicalCasted: string = hospitalName.hospitalName.split(" ").join("").toLowerCase();
        if(hospitalCasted === hospitalMedicalCasted){
            const userMdcalId: string = hospitalName.userId;
            for(const user of datosJson){
                if(userMdcalId === user.userId){
                    const fullUsername: string = `${user.firstName} ${user.lastName}`;
                    if(!(usersFound.includes(fullUsername))){
                        usersFound.push(fullUsername);
                    }
                }
            }
        }
    }
    return usersFound;
}

console.log(hospitalUsers("Clínica Comfamiliar"));