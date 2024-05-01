//for
//basic
for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
}

//inner and outer loop
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <=10; j++) {
        const element = j;
        //console.log(`Inner loop: ${j} and Outer loop ${i}`);
        //console.log(i+"*"+j+"="+i*j);
        //console.log(`${i}*${j}=${i*j}`);
    }
}

const myArray = ["flash","batman","superman"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

//break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        //console.log(`Detected 5 `);
        break
    }
    //console.log(`value of index is: ${index}`);
    
}
//console.log(`dfg`);

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5 `);
        continue
    }
    console.log(`value of index is: ${index}`);
    
}


