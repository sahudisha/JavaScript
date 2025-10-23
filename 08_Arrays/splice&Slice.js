let arr = [34, 5, 12, 6, 7, 57, 89]
//splice(position,noOfElements,Elements To ) and it returns the removed array elements
let spliceArray = arr.splice(2, 3, 11, 11, 11, 11) //it will remove 3 elements from position 2 after and enter all elements present here in the array
console.log(arr) //Array is mutuated from splice
console.log(spliceArray) //[ 12, 6, 7 ]

let arr2 = [34, 5, 12, 6, 7, 57, 89]
//slice doesn't mutuate the array and it returns the sliced elements
let sliceArr = arr2.slice(2) //no end position
console.log(sliceArr) //[ 12, 6, 7, 57, 89 ]
console.log(arr2) //[34,  5, 12, 6, 7, 57, 89]

console.log(arr2.slice(2,4)) //[ 12, 6 ]