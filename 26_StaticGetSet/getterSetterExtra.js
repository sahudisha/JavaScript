//Getter are useful when you want a property’s value to be computed dynamically or to hide internal data.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person1.fullName);  // John Doe


//Setter are useful for validation, data transformation, or triggering side effects when a property changes.
const person2 = {
  firstName: "John",
  lastName: "Doe",
  
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person2.fullName = "Jane Smith";
console.log(person2.firstName); // Jane
console.log(person2.lastName);  // Smith


//Combined
const user = {
  firstName: "Alice",
  lastName: "Johnson",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(user.fullName);   // Alice Johnson
user.fullName = "Emma Brown";
console.log(user.fullName);   // Emma Brown
