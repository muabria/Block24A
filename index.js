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
    return{str1,str2}
}

console.log(add(2,4));



// Higher Order Functions 

/* Higher-order Function
Write a higher-order function that takes an array and a modifying function as arguments. 
The higher-order function should modify each element in the input 
and return a new array containing the modified elements.  */


// Converts all string elements to lowercase.
// [Hippopotamus, King Cobra, Giant Panda, Crocodile] 

const namesArray = ["Hippopotamus, King Cobra, Giant Panda, Crocodile"]; 

const namesWithLowercase = namesArray.map(name => name.toLowerCase());

console.log(namesWithLowercase);

const namesWithMoreLength = namesArray.filter(name => name.length > 11); 

console.log(namesWithMoreLength); 


