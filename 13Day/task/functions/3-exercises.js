// Write a function that calculates the area of a right triangle.


// ******************* DONT MODIFY - START ******************* 
function rightTriangleArea(base, hight){
    if(Number(base) === 0 || Number(hight) === 0){
        console.log("triangle length can't be 0")
    }
    else{
        const area = (base * hight) / 2
        console.log(area);
    }
}
rightTriangleArea(4, 5); // should print 10
rightTriangleArea(2, 2); // should print 2
rightTriangleArea(0, 5); // should print "triangle length can't be 0"
rightTriangleArea(10, 32); // should print 160
// ******************* DONT MODIFY - END ******************* 