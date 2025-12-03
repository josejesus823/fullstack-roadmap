/*
86. Find Type of Given Angle
Write a JavaScript program to find the types of a given angle.  
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
 */

function typeOfsAngles(angle){
    if(angle < 90) return `Acute Angle`;
    else if(angle === 90) return `Rigth Angle`;
    else if (angle < 180) return `Obtuse angle`;
    return `Straight angle`;

}

console.log(typeOfsAngles(47));   // Acute angle.
console.log(typeOfsAngles(90));   // Right angle.
console.log(typeOfsAngles(145));  // Obtuse angle.
console.log(typeOfsAngles(180));