/*function addTwoNumbers(num1, num2)
    {
        console.log(num1 + num2)

    }
    addTwoNumbers(3,4)
    
    this code will return undefined*/

    function addTwoNumbers (num1,num2)
    {
        // let results = num1+num2
        // return result
        return num1 + num2
        console.log("Nagma");//won't give Error but unreachable statement 
    }
    const result = addTwoNumbers(3,5)
    //console.log("Result: ",result);


    function loginUserMessage(username)
    // function loginUserMessage(username=="sam")//default value
    {
        if(!username)
        {
            console.log("Please enter a username");
            return//outside return statement will not print
        }
        return`${username} successfully Logged in`
    }

     //console.log(loginUserMessage("Nagma"));
     console.log(loginUserMessage());//if we not pass any value than o/p will be undefined

     //shopping cart

     function calculateCartPrice(val1,val2,...num1)
     {
        console.log(val1);
        return num1
     }
     console.log(calculateCartPrice(200,3,400,556,432));

//how to pass object in functions
const user = {
    username: "Nagma",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`);
}
//handleObject(user)

//direct pass object
handleObject({
    username: "Nagma",
    price: 399 
})

//how to pass Array in functions
const myNewArray = [200,786,232,344]

function returnSecondValue(getArray)
{
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,786,232,344]));