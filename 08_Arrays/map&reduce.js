// forEach(): Executes a provided function once for each array element but does not return a new array. It return undefined
// map(): Transforms each element of an array and returns a new array with the transformed elements. It is used when you want to create a modified version of the original array.
// map(): Does not modify the original array but creates a new one.

let arr1 = [45, 19, 21]
//array.map() return a new array
let arrMap = arr1.map(e => (e))
console.log("Map : ", arr1, arrMap)

//Array Map used {} because of arrow function //Here ardsfr2 (parameter : can be predefined array but here it will be a parameter only) just to explain that array which foreach and map takes is same array
let arrMapped = arr1.map((element, index, ardsfr2) => {
    console.log(ardsfr2)
    return element + index;
})
console.log("Map : ", arr1, arrMapped)

//Array Filter Method
let arr2 = [45, 19, 21, 18]
let arrFilter1 = arr2.filter((e) => { return e < 25 })
let arrFilter2 = arr2.filter(e => (e < 25)) //Brackets not used as not an arrow func simple brackets is used to return
console.log('Filter Array1 :', arrFilter1)
console.log('Filter Array2 :', arrFilter2)

//Array Reduce Method
let arr3 = [45, 19, 21, 18]
let arrRed = arr3.reduce((a, b) => { return a + b })
console.log(arrRed)