let num = [1, 2, 3, 4, 5]
console.log(num.length) //array property used to return length of a num
let b = num.toString();
console.log(b, typeof b) //b is a string now

console.log(num.join('-')) //join all the array elements with a seperator

// let popReturn = num.pop(); //Pop out the last element from an array and it returns the popped element and modifies the original array
// console.log(num, popReturn)

// let pushReturn = num.push(10); //Push the element in an array at the last positon and it return the length of the array and modifies the original array
// console.log(num, pushReturn)

// let shiftReturn = num.shift(); //Remove out the first element from an array and it returns the popped element and modifies the original array
// console.log(num, shiftReturn)

let unShiftReturn = num.unshift(10); //Insert the element in an array at the first positon and it return the length of the array and modifies the original array
console.log(num, unShiftReturn)