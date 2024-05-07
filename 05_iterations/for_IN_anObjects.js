let myObject = {
    js: "javascript",
    cpp:"c++",
    rb:"Ruby",
    py:"Pyhton",
    swift:"swift by apple"
}

for (const key in myObject) {
   
        console.log(`${key} is stands for ${myObject[key]}`);
    
}

//in array
const arr = ["js","py","cpp","java","rb"]
for (const key in arr) {
  console.log(`programming languages are - ${arr[key]}`);
}



