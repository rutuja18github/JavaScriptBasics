
// outer function
function display() {

    // variable defined outside the inner function
    let name = 'Rutuja';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const message = display();
console.log(message); // returns the function definition
console.log(message()); // returns the value