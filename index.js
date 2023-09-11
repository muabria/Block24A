// First-class Function
// Assign a function to a variable in JavaScript 
// use it to return another function that performs a specific operation, 
// such as multiplying two numbers or transforming a string.

const func = (str) => {
    return str.toUpperCase();
}
    
console.log(func('welcome'));


const multiply = (a,b) => multiplyTotal (a, b); 

    const multiplyTotal = (a,b) =>{
    return a * b;
}

console.log(multiply(3, 7));

function add(a,b){
    let str1 = a + 2; 
    let str2 = b + 4;
    return{a: str1, b: str2}
}

console.log(add(5,5));



// Higher Order Functions 

/* Higher-order Function
Write a higher-order function that takes an array and a modifying function as arguments. 
The higher-order function should modify each element in the input 
and return a new array containing the modified elements.  */


// Converts all string elements to lowercase.
// [Hippopotamus, King Cobra, Giant Panda, Crocodile] 

const namesArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]; 

// convert all to lowercase

const namesWithLowercase = namesArray.map(name => name.toLowerCase());

console.log(namesWithLowercase);

// print a tring that has a length of only 11 characters 

const namesWithMoreLength = namesArray.filter(name => name.length > 11); 

console.log(namesWithMoreLength); 


//callback function / reverse string 

const myCallback = (arr) => {
    return arr.map(item => item.split('').reverse().join(''));
}
//function that calls the reverse string on animals array

function reverseArray(arr, callback) {
 return callback(arr);
}

const reverse = reverseArray(namesArray, myCallback);
console.log(reverse);



//Prompt 4 - Display Winner

function runners(speed,name){
    let runner=[];
   for(let i=0;i<speed.length;i++){
         runner[i] = [speed[i],name[i]]
   }

   let finalRunner = runner.sort();
   let l = finalRunner.length-1;

   
   return displayWinner(finalRunner[l],finalRunner[l-1],100);
}

function displayWinner (runner1, runner2, raceDistance){
    let winner;

    if(runner1[0] === runner2[0]) return "It's a  tie!!" ;

    winner= (runner1[0] > runner2[0]) ?  runner1[1] : runner2[1] ;

    return `${winner} is a Winner in ${raceDistance} race distance`;
}

let race = {
    name:["fizz","buzz","fizzBuzz"],
    speed:[5,6,4]
}

console.log(runners(race.speed,race.name));