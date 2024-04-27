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