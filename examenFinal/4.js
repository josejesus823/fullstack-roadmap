/*4. El pais se enfrenta a una situacion global compleja en la que requiere la mayor cantidad de medicos posible, 
para esto necesitamos encontrar una lista con los estudiantes de medicina que hallan 
aprobado 6 de las 10 materias que tiene la carrera de Medicina, la lista debe tener la siguiente estructura:



    {
      fullName: "",
      approvedSubjects: [],
      universityName: "",
    }
*/

const { readFileSync } = require('node:fs');
const studentsRaw = readFileSync('./students_db.json', 'utf-8');
const gradesRaw = readFileSync('./grades_db.json', 'utf-8');
const universityRaw = readFileSync('./universities_db.json', 'utf-8');


const studentsJson = JSON.parse(studentsRaw);
const UniversityJson = JSON.parse(universityRaw);
const gradesJson = JSON.parse(gradesRaw);


function findMedics() {
    const studentsMedicine = [];
    for (const student of studentsJson) {
        const studentFullName = `${student.firstName} ${student.lastName}`;
        if (student.career === "Medicina") {
            let studentId = student.userId;
            for (const grade of gradesJson) {                
            }
        }
    }
    // console.log("acabo usuario");
}
findMedics();
