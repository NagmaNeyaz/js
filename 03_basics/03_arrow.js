const user = {
    username: "Nagma",
    price:999,

    welcomeMsg : function()
    {
        console.log(`${this.username}, wlcm to website`);
    }
}

/*user.welcomeMsg()
user.username = "sam"
user.welcomeMsg()

console.log(this);//empty
*/


/*function chai(){
    let username = "hitesh"
    console.log(this.username);//undefined
}
chai()*/
/*
const chai = function (){
    let username = "hitesh"
    console.log(this.username);
}*/

 /*chai =  () =>{ //ARROW FUNCTION
    let username = "hitesh"
    console.log(this);//{}   i.e, empty
}
chai()*/

/*const chai=(num1,num2) => {
    return num1 + num2
}

console.log(chai(3,4));*/


/*implicit return

const chai = (num1,num2 ) =>  num1+num2

console.log(chai(3,2));*/

/*to object implicit return must be in a perenthesis
const a = (username) => ({username:"Nagma"})
console.log(a());*/



