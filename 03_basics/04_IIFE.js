//Immediately Invoked Function Expressions(IIFE)

//to remove the global scope poltuion
//to immediate execute 


(function chai(){
    //named IIFE
console.log(`DB connected`);
})(); //need terminator to stop the iife


//arrow function
((name) =>{
    //UNNAMMED IIFE
    console.log(`DB connected Two ${name}`);
    })('Nagma') //not rerquired semicolon

