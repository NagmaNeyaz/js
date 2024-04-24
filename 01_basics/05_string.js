//  const name = "Nagma " //string can de declare in this way
//  const repCount = 50
// //  console.log(name + repCount+ " Value");  outdated syntax 

// console.log(`Hello my name is ${name} and my repo count is ${repCount}`);

// //2nd way of declaring string
const gameName = new String('NAGMaAa');
// /*console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// */
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('M'));

//  //console.log(gameName.indexOf(M)); will give Error
//  /*ReferenceError: M is not defined 
//  at Object.<anonymous> */
// console.log(gameName.indexOf('m'));// wrong output  it will give -1

const newString = gameName.substring(0,4);//lastindex-1
console.log(newString);


const anotherString = gameName.slice(-3,7);//lastindex-1
console.log(anotherString);


//trim()
//it removes whitespace + line terminator(/n) from start and end 

const newStringOne = "  Nagma  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nagma.com/nagma%201parween"
console.log(url.replace('%20','-'));

console.log(url.includes('nagma'));
console.log(url.includes('NAGMA'));

const newvar = new String('Nagma*parween*Neyaz*Anwar');
console.log(newvar.split('*'));





