const radius = [3, 1, 2, 4];
//callback function
const area=function (radius){
    return Math.PI*radius*radius;
}

//callback function
const cicumference=function (radius){
    return 2*Math.PI*radius;
}

//callback function
const diameter=function (radius){
    return 2*radius;
}
//calculate is a higher order function 
const calculate = function (radius, logic){
    const output = [];
    for(let i=0; i < radius.length ;i++){
        //
         output.push(logic(radius[i]));
    }
    return output;
}
//here callback functions are pass as an argument to higher order function
console.log(calculate(radius, area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));