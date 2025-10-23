// '/' is treated as escape sequence
console.log('Banana\'s')
console.log('Banana\ts')
console.log('Banana\ns')


// \r returns to the start of the same line and overwrites “Hello” with “World”.
// To Check this run the file using nodemon as the browser console (or even some modern IDEs like VS Code terminal) doesn’t truly simulate a text cursor. It interprets \r as a normal newline, similar to \n. So instead of overwriting, it prints both.

console.log('Hello\rWorld')

const text = "Line1\rLine2";
console.log(text);