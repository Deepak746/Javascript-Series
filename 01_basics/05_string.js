const name = "Deepak"
const repCount = 50

// console.log(name + repCount + "value");

// console.log(`Hello my name is ${name} and my repCount is ${repCount}`);

const gameName = new String('hiteshhc')  // new creates an object as String


// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName);

// console.log(gameName.length);


// console.log(gameName.toUpperCase());  //HITESHHC
// console.log(gameName.charAt(4)); //s
// console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 3)
console.log(anotherString);


const new1 = "      Deepak     "
console.log(new1);
console.log(new1.trim());