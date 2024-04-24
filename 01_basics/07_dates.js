// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate  = new Date("20-12-2023")
// let myCreatedDate = new Date("2023-02-2023")
//let my CreatedDate = new Date(2023,4,65,7,CreatedDate
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //to get result into sec not ms and using floor to avoid decimal result

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.getDay());

//writing date in string interpolation
//`${newDate.getDay()} and the time is....`

newDate.toLocaleString('default', {
    weekday: "long"
    }
)