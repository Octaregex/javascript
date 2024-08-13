// const userOne = {
//     username : "sachin",
//     age: 21,
//     welcomeMessage: function() {
//         console.log(`${this.username}, just logged in`)
//         //console.log(this)

//     } 
// }
// // userOne.welcomeMessage()
// // userOne.username = "sunny"
// // userOne.welcomeMessage()
// console.log(this); // it will return no global context as {} in node runtime environment and returns window object in browser

 


// function student(){
//     let username = "sachin"
//     console.log(this.username)
// }
// student()


// arrow function

// const sum =(num1, num2) => {
//     return num1 + num2
// }
//console.log(sum(2,3));
const sum = (num1, num2) => (num1+num2)
const userdetails = () => ({
    userName: "sachin",
    age: 21
})
//console.log(userdetails())

// arrow function does not have its own this keyword thus it will return the encolsing lexical context

// here the lexical context is global thus return empty object 
const obj1 = {
    userName: "sachin",
    age: 12,
    fun: () =>{
        console.log(this)
    }
}
obj1.fun()


const obj2 = {
    userName: "vaishali",
    age: 27,
    // encolsing lexical context
    fun: function() {
        const fun2 = () => {
            console.log(this.age)
        }
        fun2()
    }
}
obj2.fun()