import { readFileSync } from 'node:fs';

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

function serviceData(serviceId: string): MedicalData | string {
    const servicedCasted: string = serviceId.split(" ").join("").trim().toLocaleLowerCase();
    if (!servicedCasted || servicedCasted.length < 4) return "Invalid ServiceID";

    for(const user of medicalData){
        if(servicedCasted === user.serviceId){
            return user;
        }
    }

    return "Service not found";
}


console.log(serviceData("srv_001111"));