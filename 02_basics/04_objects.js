//singleton or how to declare objects with the help of constructor

const tinderUser = new Object()
//const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Nagma"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"Nagma",
            lastname: "Parween"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

/*to combine objects 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2,obj4)
console.log(obj3);*/

/*
const target = {a:1,b:2}
const source = { b:4, c:5}

const returnedTarget = Object.assign(target,source)
console.log(target);//{a:1,b:4,c:5}
console.log(returnedTarget);

console.log(returnedTarget === target);//true*/

//spread (more usable)
//const obj3  ={...obj1,...obj2}
//console.log(obj3)

//array of objects
const users = [
    {
        id:1,
        email:"asdf@gmail.com"
    },
    {

    },
    {

    }
]
console.log(tinderUser)

console.log(Object.keys(tinderUser));//datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array with in array
console.log(tinderUser.hasOwnProperty('email'));//false
console.log(tinderUser.hasOwnProperty('id'));//true

//Destructuring of objects
const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor:"Nagma"
}

const {courseInstructor:Instructor } = course
//console.log(courseInstructor)
console.log(Instructor);