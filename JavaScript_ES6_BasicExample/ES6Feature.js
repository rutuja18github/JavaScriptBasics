//Array destructuring
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  

//let color1=colors[0];
//let color2=colors[2];
  
// destructuring assignment  
var[color1, color2, ...color3] = colors;  
  
console.log(color1); 
console.log(color2); 
console.log(color3); 

//template literals
const PersonName = 'Rutuja Patil';
console.log(`My name is ${PersonName}`); 

//Default function parameter
function multiply(a, b=6) {
    return a * b;
}
let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);


//Spread Operator
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

/*/The For/Of Loop-Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  console.log(x);
}

//Ex.2-Looping over a String
let text = "JavaScript";
for (let letter of text) {
    console.log(letter);
}*/

//createMap
const fruits = new Map([            
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
var a = fruits.get("bananas");      
console.log(a);

// Create a Set  
const character = new Set();         
character.add("x");
character.add("y");
character.add("z");
character.add("c");
character.add("d");
console.log(character);
console.log(character.size);         // Display size

//Classes
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2016);
console.log(myCar1.name + " " + myCar1.year);
console.log(myCar2.name + " " + myCar2.year);

//Symbol Type 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
let id = Symbol('id');
person[id] = 140353;
console.log(person[id] + " " + person.id);

//Function Rest Parameter - Ex
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
        return sum;
    }
let x = sum(4, 9, 13, 25, 29, 50, 76, 33);
console.log(x);

//String includes() method
var stringValue = "Welcome to The Beautiful World.";
var check = stringValue.includes("World");          //return true
console.log(check)
var check1 = stringValue.includes("Hii");           //return false
console.log(check1)

//Strings startsWith() method
function func() {
    // Original string
    var originalString = 'It is a great day.';
     // Checking the condition
    var value = originalString.startsWith('It');
    console.log(value);
}
func();

//String.endsWith(searchString, length) - Ex.1
let text = "John Doe";
console.log(text.endsWith("Doe"));        

//Ex.2
function func() {
    // Original string
    var str = "Welcome World";
    // Finding the search word in the given string upto the given lenght
    var value = str.endsWith('World',7);
    console.log(value);
}
func();

//  rest parameter
function fun(a,b,c,...input){
    console.log(input)
    return a+b+c
}
console.log(fun(1,2,3,4,5));