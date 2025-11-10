console.log(document.cookie)
//This will add cookie with the existing one. It doesn't over unless Name doesn't exist in the cookie.
document.cookie = "Name=Disha"
document.cookie = "Surname=Sahu"
//This will override the Name cookie with Arunesh Singh
document.cookie = "Name=Arunesh Singh"
let key = prompt("enter your key")
let value = prompt("enter your value")
// We can store the special char with encodeURIComponent and can decode them using decodeURIComponent
//Eg = key : 1;; and value : tur=
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

//Here path and expires are cookies options and are optional. These are stored as same cookie but will be ignored if try to store any thing else
document.cookie = 'user=Arunesh; path=/home; expires=date'
//path will make the cookie available at that path. expires can be used to set the expiration time.
document.cookie = 'name=Disha; surname=sahu;' //it will store name only in the cookie

// Note : The name=value pair should not exceed 4Kb after enocodeURIComponent is used.
//Total NO of cookie per domain is max around 20+ (mostly depends on the browser)