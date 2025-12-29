/*
2. necesitamos un resumen sobre los servicios que a usado un paciente, '
para esto crea una funcion llamada userServicesResume, 
que reciba como parametro el nombre de un usuario de nuestra base de datos.

    la funcion debe retornar el siguiente informe:

    {
        userId: "",
        firstName: "",
        lastName: "",
        totalMedicalAppointments: 1302,
    }


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


interface UserInformation {
    userId: string;
    firstName: string;
    lastName: string;
    totalMedicalAppointments: number;
}


function userServicesResume(userName: string): UserInformation | string {
    const userNameCasted = userName.trim().split(" ").join("").toLowerCase();
    if (userNameCasted.length < 4) return "Invalid username";
    const userInformation: UserInformation = {
        userId: "",
        firstName: "",
        lastName: "",
        totalMedicalAppointments: 0,
    }

    let count: number = 0;

    for (const user of datosJson) {
        const fullUserName = (user.firstName + user.lastName).toLowerCase();
        if (userNameCasted === fullUserName || userNameCasted === user.firstName.toLowerCase() || userNameCasted === user.lastName.toLowerCase()) {
            const userId: string = user.userId;
            for (const userMedInfo of medicalData) {
                if (userId === userMedInfo.userId) {
                    count++;
                    userInformation.userId = user.userId;
                    userInformation.firstName = user.firstName;
                    userInformation.lastName = user.lastName;
                    userInformation.totalMedicalAppointments = count;
                }
            }
        }
        
    }
    console.log(userNameCasted);
    return userInformation
}

console.log(userServicesResume("Vázquez"));

