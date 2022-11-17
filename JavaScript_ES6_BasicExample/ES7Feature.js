let b_value = 2
let e_value = 4
console.log('With Math.pow() function' ,Math.pow(b_value, e_value))
console.log('With exponentiation operator ', b_value**e_value)

let stud_marks = [10,20,50,30]
 if(stud_marks.includes(20)){
    console.log('Element is found in given array')
    }else{
    console.log(' Element is not found in given array ')
    }
    if(stud_marks.includes(20,2)){
    console.log('Element is found in specified array index');
    }else{
    console.log(' Element is not found in specified array index ')
    }
    console.log([NaN].includes(NaN))
    let student1 = {stud_name:'Johan'},
    student2 = {stud_name:'Virat'},
    student3={stud_name:'Rohit'}
    let students = [student1, student2] 
    console.log(students.includes(student1))
    console.log(students.includes(student3))