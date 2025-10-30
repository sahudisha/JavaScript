//Change the card title color to red using getElementById 
//getElementById Return one element By standard Id should not be duplicate even we do that it will return first element
// let ctitle = document.getElementById('cardtitle');
// ctitle.style.color = 'red';

//getElementsByClassName return all the element with that class
let ctitleClass = document.getElementsByClassName('card-title');
ctitleClass[0].style.color = 'red';
ctitleClass[1].style.color = 'blue';
ctitleClass[2].style.color = 'green';

//style.color works on element not on HTML collection/NodeList works on element directly

//Returns all elements inside an element matching the CSS selector('.' for class # for Id)
let queryAll = document.body.querySelectorAll('.card-title');
console.log(queryAll); //NodeList(3) [h5#cardtitle.card-title, h5.card-title, h5.card-title.this]

//Returns an elements inside an element matching the CSS selector('.' for class # for Id)
let querySel = document.body.querySelector('#cardtitle');
console.log(querySel); //h5#cardtitle.card-title

//getElementsByTagName return all the element with the tag
let ctitleTag = document.getElementsByTagName('h5');
console.log(ctitleTag)

//getElementsByName return all the element with the Name
let tagName = document.getElementsByTagName('search');
console.log(tagName) //name='search' is mentioned in input
