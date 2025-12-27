import dataJson from '../user-database.json';

const datosJson: userData[] = dataJson;


interface userData {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    email: string;
}



function userRiskByAge(user: string): string {
    const userLowerCase = user.split(" ").join("").toLowerCase().trim();
    if(!user || userLowerCase.length < 4) return "Agregue un nombre de usuario valido";
    if(userLowerCase.startsWith("usr_")) return "Por favor ingrese el nombre del usuario no el ID";

    // const saveSimilarNames: userData[] = [];
    for(const user of datosJson){
        const fullUserName = (user.firstName + user.lastName).toLowerCase();
        if(userLowerCase === fullUserName || userLowerCase === user.firstName.toLowerCase()){
            // saveSimilarNames.push(user);
            if(user.age > 60) return "alto";
            else if(user.age <= 60 && user.age >= 40) return "medio";
            else return "bajo";
        }
    }
    return "Usuario no encontrado";
}


console.log(userRiskByAge("Iván Parra"));