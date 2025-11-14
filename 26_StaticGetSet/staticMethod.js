class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        console.log("Animal " + this.name + " is walking")
    }
    // static capitalize(name) {
    //     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    // }
}

//Static method can also be written outside class by attaching class Name:
Animal.capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
}

j = new Animal("monkey")
j.walk()
// console.log(j.capitalize("cat")) // --- > this doesnt work
console.log(Animal.capitalize("cat")) // --- > this work
