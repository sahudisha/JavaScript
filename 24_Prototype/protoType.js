// A prototype is an object that other objects inherit properties and methods from — JavaScript uses a prototype chain for inheritance.

let a = {
  name2: "Harry",
  language: "JavaScript",
//   run: () => {
//    console.log("self run")
//   }
}
console.log(a)


let p = {
  run: () => {
   console.log("run")
  }
}
a.__proto__ = p
a.run()

p.__proto__ = {
  name: "Jackie"
}
console.log(a.name)