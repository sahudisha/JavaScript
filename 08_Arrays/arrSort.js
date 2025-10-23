// sort function sort the elements of an array alphabetically
let a1 = [1, 2, 3, 4]
let a2 = [5, 16, 7]
let a3 = [8, 9]

let newArray = a1.concat(a3, a2, a2)
newArray.sort() //sort the array elements alphabetically ie treating as a string not numerically
console.log(newArray)  //it will print same output as console.log(newArray.sort())
console.log(typeof newArray[1]) //it will return the element type as number


//Some More Example
let num = [551, 14, 22, 54, 662, 229]
console.log(num.sort()) //Sorts an array in place. This method mutates the array and returns a reference to the same array i.e. modifies the existing array

//Correct way for sorting the element array with numbers is by passing compare function either directly or by passing the funciton:
// num.sort((a, b) => a - b);
// console.log(num);

//compare function can also passed as
const compare = (a, b) => {
    return a - b; //a-b is basis of sorting for reverse b-a can be used
}

num.sort(compare)
console.log(num)

/*
JavaScript does something like this behind the scenes:
It picks two elements from the array — say a = 40, b = 100
It calls your function: (a, b) => a - b
Based on the result:
If result < 0, keep a before b
If result > 0, swap them
If result = 0, keep them as-is
Repeats this process for all elements until sorted
*/


