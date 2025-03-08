//?Q-1:Write a code, give a number from 0 to 6, and show the day of the week (solve it with switch case).
// Please use variables given to you and Do Not change the name of them!!
/*
 0=>monday
1=>tuesday
...
*/

let number = 5;
let result;
switch (number) {
    case 0:
    console.log("monday");
     break;
     case 1:
     console.log("tuesday");
    break;
     case 2:
     console.log("wednesday");
    break;
    case 3:
      console.log("thursday");
     break;
     case 4:
     console.log("friday");
     break;
     case 5:
     console.log("saturday");
     break;
    case 6:
     console.log("sunday");
     break;

                        

    default:
    console.log("march");
}


//-------------------------------------------------------------------------------------



let number = 0;
let result;
switch (number) {
    case 0:
    result="monday"
     break;
     case 1:
     result="tuesday"
    break;
     case 2:
     result="wednwsday"
    break;
    case 3:
      result="thursday"
     break;
     case 4:
   result="friday"
     break;
     case 5:
    result="saturday"
     break;
    case 6:
    result="sunday"
     break;

                        

    default:

}
console.log(result);