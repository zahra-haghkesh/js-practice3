// ? Question-1:write a function that accepts numbers array as parameter and split negative numbers and positive numbers in two seperated array.
const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:
const positiveNumbers = [];
const negativeNumbers = [];
function splitNumbers(numbers) {

    for(let i=0 ; i<numbers.length ; i++)
    if (numbers[i]>=0){
        positiveNumbers.push(numbers[i]) ;
    } else {negativeNumbers.push(numbers[i]);

    }
   return {positiveNumbers,negativeNumbers};
}

console.log(splitNumbers(numbers));

