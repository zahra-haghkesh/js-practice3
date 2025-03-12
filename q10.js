//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85


function calculateCircleArea (r){
let form = r*r*Math.PI
let area = form.toFixed(2);
return Number(area);
}
console.log(calculateCircleArea(3));


function calculateCircleCircumference(r){
let formo =2*r*Math.PI
let circum = formo.toFixed(2);
return Number(circum);
}
console.log(calculateCircleCircumference(3));