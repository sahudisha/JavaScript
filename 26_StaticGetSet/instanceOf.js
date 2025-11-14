class Animal { }

class Rabbit { }

let a = new Animal();
let r = new Rabbit();

console.log(a instanceof Animal) //true
console.log(r instanceof Animal) // This is false
console.log(r instanceof Rabbit) //true
console.log(r instanceof Rabbit) //true