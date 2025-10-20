// Primitive Data Types( 7 dataType) - nn bb ss u
//null numbers boolean bigInt symbol string undefined
let a = null
let b = 357
let c = true //can be false as well
let d = BigInt(357) + BigInt("3") //It is of BigInt dataType : "360n" ans
let e = Symbol('I am value of symbol dataType');
let f = "Arunesh Singh"
let g; //let g=undefined is also meant sam; dataType is undefined

console.log(a, b, c, d, e, f, g)

console.log(typeof d) //typeof(d) - will tell dataType of d

//Non Primitive DataType - Object
const obj = {
    Name: "Arunesh", //"Name":"Arunesh" Key value pair can also be defined as this
    SurName: "Singh",
    Age: 32
}

//Below console.log will give same result
console.log(obj.Name)
console.log(obj["Name"])

console.log(obj.test) //trying to get result of test from obj will give undefined as it is not present in obj