import dataJson from '../user-database.json';
import { readFileSync } from 'node:fs';



const datosJson: userData[] = dataJson;

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


interface userAppoinment {
    userId: string;
    fullName: string;
    serviceId: string;
    speciality: string;
    hospitalName: string;
    medicalNotes: string;
    medicationsUsed: string[];
    date: string;
}


function userLastAppoiment(user: string): userAppoinment | string {
    const userCasted: string = user.split(" ").join("").trim().toLocaleLowerCase();
    if(!userCasted || userCasted.length < 4) return "Usuario no valido";
    const lastUser: userAppoinment ={userId: "", fullName: "", serviceId: "", speciality: "", hospitalName: "", medicalNotes: "", medicationsUsed: [], date: ""};
    let maxDate: string = "";
    
    for(const user of datosJson){
        const userFullName: string = (user.firstName + user.lastName).toLowerCase();
        if(userCasted === user.userId || userCasted === userFullName){
            const userId: string = user.userId;
            for(const userMedical of medicalData){
                if(userId === userMedical.userId){
                    const temporalDate: string = userMedical.date;
                    if(temporalDate > maxDate) {
                    maxDate = temporalDate;
                    lastUser.userId = user.userId;
                    lastUser.fullName = `${user.firstName} ${user.lastName}`;
                    lastUser.serviceId = userMedical.serviceId;
                    lastUser.speciality = userMedical.speciality;
                    lastUser.hospitalName = userMedical.hospitalName;
                    lastUser.medicalNotes = userMedical.medicalNotes;
                    lastUser.medicationsUsed = [...userMedical.medicationsUsed];
                    lastUser.date = maxDate;
                    }
                }
            }
        }
    }
    return lastUser;
}

console.log(userLastAppoiment("usr_001"));