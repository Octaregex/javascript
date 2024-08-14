// its is mostly used in array 
//const myArray = ["sachin", "sunny", "srijan", "yash"]
// myArray.forEach( function (items) {
//     console.log(items)
// })

//myArray.forEach((items)=> console.log(items))

// function hola(items, index, arr){
//     console.log(items, index, arr);  
// }
// myArray.forEach(hola)

const myArray = [
    {
        username: "sachin",
        userEmail: "sachinsain2gmail.com"
    },
    {
        username: "sunny",
        userEmail: "sunny@gmail.com"
    },
    {
        username: "yash",
        userEmail: "yash@gmail.com"
    }
]

myArray.forEach((items)=> console.log(items.userEmail)
)