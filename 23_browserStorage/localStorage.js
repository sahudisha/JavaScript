localStorage.setItem('Name', 'Disha Sahu');
console.log(localStorage.getItem('Name'));
localStorage.clear();

localStorage.setItem('Name', 'Arunesh Singh')
localStorage.Learn = 'Js'; //This syntax can also be used to setItem in localStorage.
localStorage.setItem('Spouse', 'Disha Sahu')
console.log(localStorage.key(0)) //.key(index)
console.log(localStorage.length) //Gives length of localStorage
localStorage.removeItem('Spouse') //used to remove from localStorage