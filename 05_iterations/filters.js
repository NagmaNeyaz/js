const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num)=> num > 4 )

//const newNums = myNums.filter((num) =>{
    //return num>4
//})
//console.log(newNums);


/* using foreach
const newNums=[]
 myNums.forEach((num) => {
    if(num>4)
    {
        newNums.push(num)
    }
 })
console.log(newNums);
*/

const books= [
    { title: 'Book one', genre: 'Fiction', publish: 1987, edition:2010 },
    
    { title: 'Book two', genre: 'Non -Fiction', publish: 1988, edition:1996 },
    { title: 'Book three', genre: 'History', publish: 1988, edition:2011 },
    { title: 'Book four', genre: 'Maths', publish: 1981, edition:2005 },
    { title: 'Book five', genre: 'science', publish: 2017, edition:2001 },
    { title: 'Book six', genre: 'Fiction', publish: 2007, edition:1998 },
    { title: 'Book seven', genre: 'Non-Fiction', publish: 1987, edition:2006 },
    { title: 'Book eight', genre: 'Fiction', publish: 1984, edition:1998 },
    { title: 'Book nine', genre: 'History', publish: 1985, edition:1996 },

];

let userBooks = books.filter( (bk) =>bk.genre === 'History')

 userBooks = books.filter( (bk)=> bk.publish >=2000 && bk.genre === 'History' )
console.log(userBooks);