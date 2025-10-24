//These console.command can also be used in browser console
// console.log(console) //will list all console command

//console.clear() is used to clear console 
console.clear();

//info and log can be seen in info
console.log('This is Console.log')
console.info('This is console.info') //Similar to console.log but used to display message for information purpose 

//warn can be seen in warning and is printed in yellow background
console.warn('This is console.warn')

//It will print in console with red background in console browser
console.error('This is console.error')

console.assert(false) //will print console.js:7  Assertion failed: console.assert
console.assert(54 > 5) //will not print from here as it is passed it run on browser console will return undefined

console.time('ForLoop') //time started  
for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.timeEnd('ForLoop') //It will print the time for which forLoop is open Example : we have used for loop inside console.time so we can check the time taken by for loop

let objA = { a: 1, b: 2, c: 3 }
console.table(objA) //will print the object data in tabular format