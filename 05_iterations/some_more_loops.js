//for of

//["",""."",""]//strings
//[{},{},{},{}]//objects

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

const greetings ="Hello worlds!"
for (const greet of greetings) {
    
    //console.log(`Each char is ${greet}`);  
}

//Maps

const map  = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr',"France")
map.set('IN',"India")//this line will not print

//console.log(map);

//for of loop with map
for (const key of map) {
    console.log(key," : ",map);
}
 
const myObject = {
    'game1':'NFS',
    'GAME2': 'Spider'
}

for(const [key,value] of myObjects){
    console.log(key, value);
}