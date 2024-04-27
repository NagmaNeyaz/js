//objects literals

const mySym = Symbol("Key1");
const user = {
     name: "Nagma",
    [mySym]: "mykey1",
        "full Name": "Nagma Parween",
     age: 21,
     location: "Ranchi",
     email: "nagmaparween968@gmail.com",
     isLoggedIn: false,
     lastLoginDays:["Monday","Saturday"]

}

console.log(user.email);//one way to accessing the data from the objects through dot(.)
//console.log(user[email]);//error
console.log(user["email"]);//II way to access through square notation
console.log(user["full Name"]);
console.log(user[mySym]);
console.log(typeof mySym === "symbol" ? "Symbol" : typeof mySym);

//to change the value 
user.email = "nagmap228@gmail.com"
//Object.freeze(user)
user.email = "nagmap225@gmail.com"
console.log(user);

user.greeting = function()
    {
        console.log("Hello JS USER");
    }
user.greetingTwo = function()
    {
        console.log(`Hello JS USER,${this.name}`);
    }
    
console.log(user.greeting());
    
console.log(user.greetingTwo());