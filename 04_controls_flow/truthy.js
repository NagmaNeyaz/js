const usereMail = []

if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

/* falsy values

false, 0, -0, Bigint 0n, "", null, undefined, NaN

truthy values
"0" , 'false' , " " // inside string any values are truthy value
[], {}, function(){}
*/


if(username.length === 0){
    console.log("Array is empty");      
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//nullish Caolescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null?? 10??20



//Terniary Operator

syntaX:
condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80"): console.log("more than 80");

