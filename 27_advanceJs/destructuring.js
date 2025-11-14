// let arr = [19, 21]
// // No need to do this as with destructuring it is easier:
// // let a = arr[0]
// // let b = arr[1]
// //Example : 
// // let [a, b] = arr
// // console.log(a, b)
// let [a, b, c] = arr //c is undefined
// console.log(a, b, c)

// let arr1 = [1, 2, 3, 4, 5, 6]
// // let [a1, b1, ...rest] = arr1
// // console.log(rest) //[ 3, 4, 5, 6 ]

// let [a1, , ...rest] = arr1
// console.log(rest) //[ 3, 4, 5, 6 ] Here 2 is not assigned to anyone

let { a2, b2 } = { a2: 1, c2: 5, b2: 19 }
 console.log(a2, b2) //1 19
