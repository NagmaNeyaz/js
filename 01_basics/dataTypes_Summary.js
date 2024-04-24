//primitive datatype
// 7 types => String, Number, Boolean, null, undefined, Symbol

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId );

const bigNumber = 23456789087654321n

 //non primitove
 //Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj=
 {
    name: "Nagma",
    age:21,
}

const myFunction = function(){
    console.log("Hello World");
}

//+++++++++++++++++++++++++++++++++++++++
/*stack Memory(use in Primitive) --> change in copy 

Heap Memory use in (Non-Primitive) --> change in Original value
*/
/*
let  myYouTubename = "Nagma's classes";

let anothername = myYouTubename
anothername = "chaiaurcode"
 console.log(anothername);
 console.log( myYouTubename);
*/

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);