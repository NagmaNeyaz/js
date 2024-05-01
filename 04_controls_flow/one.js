const score = 200

if(score > 100){
    let power = "fly"
    console.log(`user power ${power}`);
}
//console.log(`user power: ${power}`);//out of scope


//short hand notation

const balance = 1000

if(balance>500) console.log("test"),console.log("test2"); //immature cade or not a good practice
//with comma we can write multiple statement in one line



const userLoggedIn = true
const debitCard = true
const loggegFromGoogle = false
const loggedFromEmail = true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy Course");
}

if(loggegFromGoogle || loggedFromEmail)
{
    console.log("User Logged in");
}

