/*
3. Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia, 
para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia como parametros, 
debe retornar "true" si aprobo la materia o "false" si la reprobo. Nota: Cada estudiante tiene varias calificaciones en 
cada materia, para determinar si paso la materia, el promedio de las calificaciones debe ser superior a 3.
*/

const { readFileSync } = require('node:fs');
const studentsRaw = readFileSync('./students_db.json', 'utf-8');
const gradesRaw = readFileSync('./grades_db.json', 'utf-8');
const universityRaw = readFileSync('./universities_db.json', 'utf-8');


const studentsJson = JSON.parse(studentsRaw);
const UniversityJson = JSON.parse(universityRaw);
const gradesJson = JSON.parse(gradesRaw);


function subjectApproved(fullName, subjectName){
    if(!fullName ||!subjectName || subjectName.trim() === "" || subjectName.length < 3 || fullName.trim() === "" || fullName.length < 4) return "Invalid Information";
    const nameCasted = fullName.trim().split(" ").join("").toLowerCase();
    const subjectNameCasted = subjectName.trim().split(" ").join("").toLowerCase();
    let userId = "";
    for(const user of studentsJson){
        const fullUserName = (user.firstName + user.lastName).toLowerCase();
        if(nameCasted === fullUserName){
            userId =  user.userId;
        }
    }
    let acu = 0;
    let count = 0;
    for(const user of gradesJson){
        const subjectGradeCasted = user.subject.split(" ").join("").toLowerCase();
        if(userId === user.userId && subjectNameCasted === subjectGradeCasted){
            count++;
            acu += user.grade
        }
    }
    
    const TotalGrade = acu / count;
    return (TotalGrade >= 3);
}

console.log(subjectApproved("yahir yEpeS", "Pensamiento Económico"));