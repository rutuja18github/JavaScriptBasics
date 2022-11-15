//Multiline Arrow Functions 
let add =(num1,num2) =>{
    let result =num1 + num2;
    return result;
}
let answer=add(10,22);
console.log("Addition is :"+answer);


//Arrow Function as an Expression
let age = 20;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); 