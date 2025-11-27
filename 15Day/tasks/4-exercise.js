/*
4. Calculate Area of Triangle (Sides: 5, 6, 7)
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.   
*/

function calculateTriangleArea(a,b, c){
    const lado1 = a;
    const lado2 = b;
    const lado3 = c;
    const semiperimetro = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    console.log(area);

}

calculateTriangleArea(5,6,7);
