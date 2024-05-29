// Is js a dynamically typed or statically typed language



// Primitive Datatype (Call by Value)
// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt 


// Non Primitive (Call by Reference)

// Arrays, Objects, Functions
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

let name1 = "deepakcodes"

let name2 = name1  // takes only a copy

name2 = "chaiaurcode"

console.log(name1); //deepakcodes
console.log(name2); //CHAIAURCODE

let usr1 ={
    email : "me@ggl.com",
    upi : 'usr1@ybl'
}

let usr2 = usr1  // usr2 takes reference of usr1

usr2.email = "someoneelse@ggl.com"

console.log(usr1.email);  //someoneelse@ggl.com
console.log(usr2.email);  //someoneelse@ggl.com
