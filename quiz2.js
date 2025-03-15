// ? Question-2:write a function to find the biggest number in this  array and push it to a new array
const findBigNumber = [5, 2, -10, 50, 35];

// !Answer:
function findBiggestNumber(number) {
    let max =number [0];
    for(let i=0 ; i<findBigNumber.length ; i++ )
    if(number[i]>max){
        max=number[i];
    }
    return[max];
}
console.log(findBiggestNumber(findBigNumber));
