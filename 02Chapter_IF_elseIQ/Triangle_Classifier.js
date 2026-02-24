let side1 = 10;
let side2 = 10;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("triangle is equilateral");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("triangle is isosceles");
} else
    console.log("triangle is scalene");