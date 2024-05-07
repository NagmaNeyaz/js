/*const arr = [1,2,3,4]
//0+1+2+3+4

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
     initialValue
);

console.log(sumWithInitial); //10*/


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval)
// {
//     console.log(`accumulator: ${acc} and currentvalue: ${currval}`);
//     return acc + currval
// }, 3)

//arrow function
const myArray = myNums.reduce((acc, curr) => acc+curr,3)

console.log(myArray);                                                                                                                                                                                                    


//example:2
const shoppingCart = [
    {
        itemName : "blockchain",
        price : 12999
    },
    {
        itemName : "web dev",
        price : 1209
    },
    {
        itemName : "DSA",
        price : 30229
    },
    {
        itemName : "Cybeer Security",
        price : 7809
    },
    
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);
