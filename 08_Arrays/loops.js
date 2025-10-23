let num = [21, 51, 2, 39, 19]
//Iterating array using for loop
for (let i = 0; i < num.length; i++) {
    console.log('For :', num[i]);
}

//Iterating array using foreach loop and return value of foreach is undefined
num.forEach(element => {
    console.log('ForEach :', element)
});

//using for in Loop --Here key is index of element in an array
for (const key in num) {
    console.log('In :', num[key]);
}

//using for of loop
for (const element of num) {
    console.log('of : ', element)
}

//if add an element at position 10
let arrNum = [2, 4, 1]
arrNum[5] = 10;
arrNum.forEach(element => {
    console.log('ForEach :', element)
});

/*
ForEach : 2
ForEach : 4
ForEach : 1
ForEach : 10
*/

for (const key in arrNum) {
    console.log('In :', arrNum[key]);
}
// Will Print
// In : 2
// In : 4
// In : 1
// In : 10

//using for of loop
for (const element of arrNum) {
    console.log('of : ', element)
}

/*
of :  2
of :  4
of :  1
of :  undefined
of :  undefined
of :  10
*/

for (let i = 0; i < arrNum.length; i++) {
    console.log(i, arrNum[i]);

}
// it will print i and value at i
/*
0 2
1 4
2 1
3 undefined
4 undefined
5 10
*/

//It iterators of HTML Collection or String and is used to convert them to array.
let fullName = "Arunesh";
let arr = Array.from(fullName)
console.log(arr)
// Above result will print :
// ['A', 'r', 'u',  'n', 'e', 's',  'h']

//foreach loops can takes element or index or arr. Position 1 : element, 2: index, 3: Array
let arrNumFor = [2, 4, 1]
arrNumFor[5] = 10;
arrNumFor.forEach((element, index) => {
    console.log('ForEach :', element, index)
});

// ForEach : 2 0
// ForEach : 4 1
// ForEach : 1 2
// ForEach : 10 5