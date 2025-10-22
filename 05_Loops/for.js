//For Loops in Js
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//Iteration of obj using for in Loops
const studMarks = {
    Harry: 98,
    Arunesh: 90,
    Rahul: 90,
    Pratyush: 89,
    Disha: 88
}
for (let obj in studMarks) {
    console.log('Marks for ' + obj + ' is ' + studMarks[obj])
}

//Doing the same using only for loops
console.log(studMarks.length); //undefined
console.log(Object.keys(studMarks).length) //5

for (let i = 0; i < Object.keys(studMarks).length; i++) {
    console.log('Marks for ' + Object.keys(studMarks)[i] + ' is ' + studMarks[Object.keys(studMarks)[i]])
}

//Example of for of loops

// studMarks is not iterable will throw an erro
// for (let obj of studMarks) {
//     console.log('Marks for ' + obj + ' is ' + studMarks[obj])
// }

for (let obj of "Arunesh") {
    console.log(obj)
}