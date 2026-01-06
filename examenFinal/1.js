/*
1. Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.
 */

const { readFileSync } = require('node:fs');
const studentsRaw = readFileSync('./students_db.json', 'utf-8');
const universityRaw = readFileSync('./universities_db.json', 'utf-8');



const studentsJson = JSON.parse(studentsRaw);
const UniversityJson = JSON.parse(universityRaw);

function getAllStudents(){
    const allMosqueraStudents = [];
    let codeUniversity = "";
    for(const user of studentsJson){
        if(user.originCity === "Mosquera"){
            const fullName = `${user.firstName} ${user.lastName}`;
            for(const university of UniversityJson){
                if(university.universityName === "Universidad Nacional"){
                    codeUniversity = university.code;
                    if(user.universityCode === codeUniversity){
                        allMosqueraStudents.push(fullName);
                    }
                }

            }
        }
    }
    return allMosqueraStudents;
}

console.log(getAllStudents())