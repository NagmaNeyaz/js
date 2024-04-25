//const myArr = [0,1,2,3,4,5]
const myArr = new Array(1,2,3,4)
/*console.log(myArr[1]);


//Arrays Methods
myArr.push(6) //add elements at last index
console.log(myArr);
myArr.pop()//delete last element 

myArr.unshift(9)//add elemnt in the 0th index
myArr.shift()//delete 0th index elemnt 

console.log(myArr.includes(9)); 
console.log(myArr.indexOf(3));

const newArr = myArr.join() //it binds the elemnt and convert into string

console.log(myArr);//[ 1, 2, 3, 4, 6 ]
console.log(newArr); //1,2,3,4
console.log(typeof newArr); //output string
*/
//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log("slice ",myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C " ,myArr);
console.log("splice" ,myn2);

