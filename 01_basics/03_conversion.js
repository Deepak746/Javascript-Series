let score = 33
type_of_score = typeof(score)

// console.log(typeof score);
// console.log(type_of_score);

let valueInNumber = Number(score)

// console.log(valueInNumber); //Returns Nan

// console.log(typeof valueInNumber); //Returns number

// let score1 = '33abc'
// type_of_score1 = typeof(score1)

// console.log(typeof score1);
// console.log(type_of_score1);

// let valueInNumber1 = Number(score1)

// console.log(valueInNumber); //Returns Nan

// console.log(typeof valueInNumber); //Returns number

/*
"33" => 33
"33abc" =>NaN 
true =>1 ; false => 0
"" => false
"asdg" => true

*/


// ***************** OPERATIONS ********************************

let value = 3
let negVal = -value

// console.log(negVal);

// console.log("Add :",2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 ="hello"
let str2 = "hitesh"

let str3 = str1 + str2
// console.log(str3);  hellohitesh
// console.log("1" + 2); 12
// console.log(1 + "2"); 12
// console.log(1 + "2" + 2); 122
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32

// console.log(true); true
// console.log(+true); 1
// console.log(true+);
// console.log(+false); 0

console.log(+"");

let num1,num2,num3

num1 = num2 = num3 = 2+2 //not recommended

num1,num2,num3 = 2+2 // undefined undefined 4

console.log(num1,num2,num3);


let gameCounter = 100
gameCounter++;
console.log(gameCounter);
// link to study
// https://tc39.es/ecma262/multipage/abstract-operationshtml#sec-type-conversion

