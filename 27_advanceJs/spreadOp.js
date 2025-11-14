
// Spread Operator
let arr1 = [3, 5, 8] //can be any iterable obj like string,array.
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}

console.log(sum(...arr1)) //16

let obj2 = {
    name: "Arunesh",
    company: "Company xyz",
    address: "XYZ"
}

console.log({ ...obj2, name: "Arunesh", company: "ABC" }) //This will override name from obj2
// console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values as obj2 is in the end