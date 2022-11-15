//function hosting
let x = 20,
    y = 10;

let result = multiplication(x, y); 
console.log(result); 

function multiplication(a, b) {
  return a * b;
}

//Hosting of arraow function
let num1 = 20,
    num2 = 10;

let result1 = add(num1,num2); //  Uncaught ReferenceError: add is not defined
console.log(result1);

let add = (num1, num2) => num1 + num2;