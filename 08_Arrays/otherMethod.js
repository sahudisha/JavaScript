let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num.length)
let delNum = delete num[0]; //It returns true delete num[0]
//delete num[0] will delete the array element at position 0 but will not change the length of the array

console.log(num.length, num, delNum) //It will print 9 [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ] true


let a1 = [1, 2, 3, 4]
let a2 = [5, 6, 7]
let a3 = [8, 9]

let newArray = a1.concat(a3, a2, a2)
console.log(newArray)
console.log(newArray.length)

let arr = [34, 5, 12, 6, 7]
console.log(arr)
let newRevArray = arr.reverse() //It reverses the array element and mutuates the original array as well
console.log(arr, newRevArray); 