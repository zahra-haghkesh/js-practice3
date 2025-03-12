//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85


function calculateCircleArea (r){
return Math.pi *r*r;
}
console.log(calculateCircleArea(3));


function calculateCircleCircumference(r){
return 2*Math.pi*r
}
console.log(calculateCircleCircumference(3));