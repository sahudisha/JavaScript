let fullName = 'Disha Sahu'
let spouseName = 'Arunesh Singh '
console.log(fullName.length) //It is a property so '()' is not required

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.split(' ')) //It will split the string with ' ' and return the array as [ 'Disha', 'Sahu' ]
console.log(fullName.slice(1, 11)) //5 is not included in this
console.log(fullName.slice(6)) //It will print till end of the fullName

console.log(fullName.replace('Sahu', 'Singh')) //If Sahu is not matched exactly it will print fullName as it is.

console.log(fullName.concat(" ", spouseName))

console.log(spouseName.trim()) //Remove extra white spaces from both side Others Now trimStart,trimEnd
console.log(fullName.indexOf('Sahu'))


for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i])
}

console.log(fullName.includes('Sahu')) //Returns true or false on basis of string present in fullName

let houseName = 'Richa Sahu'
houseName[0] = 'D' //It will not update R to D neither error is thrown
console.log(houseName) //It will print 'Richa Sahu' as string is immutable 