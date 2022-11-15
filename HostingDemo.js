//Hosting for Var 
function display() {
  num=10;
  console.log(num);
  var num;
}
function printMessage() {
  console.log(b);
  var b = 'hello';
}
display();
printMessage();
//console.log(b);  //Throw ReferenceError

/*Hosting for let and const
  If a variable is used with the let keyword, that variable is not hoisted
  throwing ReferenceError
*/
let a = 5; 
console.log(a);

const value=100;
console.log(value); 
