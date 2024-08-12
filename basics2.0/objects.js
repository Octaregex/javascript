let mySym = Symbol("key1")

let userOne = {
    name : "sachin",
    "full Name" : "sachin sain",
    location: "ghaziabad",
    [mySym]: "mykey1",
    age: 22,
    email: "sachinsin953@gmail.com",
    isUserLoggedIn : true,
    lastWeekLogins : ["sunday","friday"]  
}
// console.log(userOne.email)
// console.log(userOne["full Name"])
//console.log(userOne[mySym]) // cannot access with dot method

// userOne.age = 27
// console.log(userOne)
// Object.freeze(userOne) // after freezing the object its value cannot be changed
// userOne.age = 23
// console.log(userOne)

// function

// userOne.greeting = function() {
//     console.log(`hello user i'm ${this["full Name"]}`)  // this is used to refer the same object
// }

// console.log(userOne.greeting())


// objects 2.0 +++++++++++++++++++++++++++++++++++

// const instamart = new Object()
// //const instamart = {}
// //console.log(instamart)

// instamart.id = 123
// instamart.email = "sachinsain983@gmail.com"
// instamart.isUserLoggedIn = true

// console.log(Object.keys(instamart));  // return as an array 
// console.log(Object.values(instamart));
// console.log(Object.entries(instamart));



// access objects in js

const regularUser = {
    email: "sachinsain982@gmail.com",
    name : {
        fullName :{
            user: {
                firstName : "sachin",
                lastName : "sain"
            }
        }
    }
}

//console.log(regularUser.name.fullName.user.lastName)



// merging two or more objects

const obj1 = {
    a : 1,
    b: 2
}
const obj2 = { c: 1, d: 2}
const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

// spread oprator
const obj4 = { ...obj1, ...obj2}
//console.log(obj4)



// user se data 

const user = [
    {
        id: "123",
        email: "sachin23@gmail.com"
    },
    {
        id: "124",
        email: "sachin23@gmail.com"
    },
    {
        id: "125",
        email: "sachin23@gmail.com"
    },
    {
        id: "126",
        email: "sachin23@gmail.com"
    }

]

// console.log(user[0].id);
// console.log(userOne.hasOwnProperty('twitter'));


// object destructuring

const {["full Name"]: login} = userOne
console.log(login);






