import datasJson from '../user-database.json'
// import rawData from '../user-database.json';
const datosJson: userData[] = datasJson;


interface userData {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    email: string;
}

function userCity(userToFind: string): string {
    if(!userToFind.trim() || userToFind.length < 4) return "Debe ingresar un usuario valido";
    const paramUser: string = userToFind.split(" ").join("").toLowerCase();
    for(const user of datosJson){
        const fullNameUser: string = (user.firstName + user.lastName).toLocaleLowerCase();
        if(paramUser === user.userId || paramUser === fullNameUser) {
            return user.city;
        }
    }
    return "usuario no existe";
}

console.log(userCity("jose vargas"));