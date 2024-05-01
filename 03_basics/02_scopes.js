function one(){
    const username = "Nagma"

    function two ()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()


//********************** Interestging ******************* */
console.log(addone(5));//6
function addone(num)
{
    return num+1
}


//diff declaration of function --- hoisting

//addTwo(5)//give error 'cause function is stored in variable
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));//work correctly


