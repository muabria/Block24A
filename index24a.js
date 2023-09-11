function applyTwice(twiceFunction, a) {
    return (twiceFunction(a));

 
};

function squareFunction(a) {
    return (a * a);
}; 

const output = applyTwice(twiceFunction, 9);
console.log(output);


function multiplyFunction(x,y) {
return (x * y); 
}; 

const result = multiplyFunction;
console.log(result(7,3));

const mapFunctions = [12, 4, 9]; 

const new_array_map = mapFunction.map((x) => x * 5);

console.log(new_array_map); 



