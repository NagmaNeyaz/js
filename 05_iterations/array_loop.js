const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item){//callback function having no name
//     console.log(val);
// })

//using arrow function
coding.forEach((item) => {
    console.log(item);
})

function printMe (item)
{
    console.log(item);
}

coding.forEach(printMe)//not executing only reference


coding.forEach((item,i,arr) => {
    console.log(item,i,arr);
})


//[{},{},{},{}]
const arr = [{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "Puthon",
    languageFileName: "py"
},
{
    languageName: "java",
    languageFileName: "java"
},
]

arr.forEach((item)=> {
    console.log(item.languageName);
})