let marks = [43, 54, 76, 21, false, undefined]
console.log(marks)
console.log(marks[0]) //Access array value using index
console.log(marks[10]) //it will print undefined as index 10 doesnot exists

marks[1] = 75; //Shows arrays are mutuable
console.log(marks[1])

marks[10] = 98;
console.log(marks[10]) //will print 98
console.log(marks)  // will print = [ 43, 75, 76, 21, <6 empty items>, 98 ]

console.log(typeof marks) //it will print object

