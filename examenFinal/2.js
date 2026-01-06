/*
Nos reportaron sobre un fraude de estudiantes que estan matriculados (su status debe ser "Matriculado") 
en carreras que no son ofrecidas en la universidad a la que pertenecen, Necesitamos generar una lista con los siguientes 
datos por cada uno de los estudiantes que estan cometiendo el fraude.

    {
      fullName: "",
      userId: "",
      universityName: "",
    }
*/

const { readFileSync } = require('node:fs');
const studentsRaw = readFileSync('./students_db.json', 'utf-8');
const universityRaw = readFileSync('./universities_db.json', 'utf-8');


const studentsJson = JSON.parse(studentsRaw);
const UniversityJson = JSON.parse(universityRaw);

function studentsStatus() {
    const arrUserFraud = []
    for (const student of studentsJson) {
        if (student.status === "Matriculado") {
            const universityCode = student.universityCode;
            const studentCarrer = student.career;
            const fullName = `${student.firstName} ${student.lastName}`;
            for (const university of UniversityJson) {
                if (universityCode === university.code && !(university.offeredCareers.includes(studentCarrer))) {
                    const userObject = {
                        fullName: fullName,
                        userId: student.userId,
                        universityName: university.universityName
                    }

                    arrUserFraud.push(userObject);
                }
            }
        }
    }

    return arrUserFraud;

}

console.log(studentsStatus());