//pad the String with 0
let productCost = '1699'.padStart(7,0)
console.log(productCost)
console.log(productCost.length)

//pad the String with blank spaces
let productCost1 = '1699'.padStart(7)
console.log(productCost1)
console.log(productCost1.length)

//pad the string with x
let productCost2 = '1699'.padEnd(7,'x')
console.log(productCost2)
console.log(productCost2.length)

//pad the string with spaces
let productCost3 = '1699'.padEnd(7)
console.log(productCost3)
console.log(productCost3.length)

let marks = [100,90,80,,]
   console.log(marks.length)
   console.log(marks)
   //ignores empty value in array
   marks.forEach(function(e){ 
      console.log(e)
   })

   // trailing commas are ignored
   function sumOfMarks(marks,){ 
    let sum=0;
    marks.forEach(function(e){
       sum+=e;
    })
    return sum;
 }

 console.log(sumOfMarks([10,20,30]))
 // trailing comma is ignored
 console.log(sumOfMarks([1,2,3],))

 //Object entry and value
 const student ={
    firstName:'Rutuja',
    lastName:'Patil'
 }
 console.log(Object.entries(student))
 console.log(Object.values(student))

 //Async Await ES8 Feature
 function addPositiveNosAsync(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          resolve(n1 + n2)
       } else
          reject('NOT_Postive_Number_Passed')
    })
    return p;
 }
 async function addInSequence() {
    let r1 = await addPositiveNosAsync(10, 20)
    console.log("first result", r1);
    let r2 = await addPositiveNosAsync(r1, r1);
    console.log("second result", r2)
    let r3 = await addPositiveNosAsync(r2, r2);
    console.log("third result", r3)
    return "Done Sequence"
 }
 addInSequence().then((r)=>console.log("Async :",r));
 console.log('end')