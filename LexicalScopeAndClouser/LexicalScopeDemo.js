//Lexical scope is the ability for a function scope to access variables from its parent
//lexical enviourment is local memory along with its parent


let PersonName = "Shreya";
function displayName() {
    let PersonAge = 30;
    console.log(PersonName);
    function displayAge() {
        console.log(PersonAge);
    }
    displayAge();
}
displayName();

var a = 10;
 function outerFunction(){ 
    var b = 20;
    console.log("a and b is accessible (outer function):", a, b);
 function innerFunction(){
        var c = 30;
        console.log("a and b and c is accessible (innner function):", a, b, c);
    }
    innerFunction();
    //console.log(c); //not accessible due to closure
    return;
}
outerFunction(); // invoke outer function  
console.log("only a is accessible (global):", a);