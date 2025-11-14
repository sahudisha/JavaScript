// we have used a different internal property (commonly named _name) as the backing field(convention for self) so the getter/setter don't call themselves and cause infinite recursion. Using this.name inside the get or set would call the accessor again, not read/write a raw value.
class Animal {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }
}

let a = new Animal("Bruno")
console.log(a.name)
a.name = "Jack"
console.log(a.name)