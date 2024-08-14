// let myArray = [1,2,3,4,5]
// for (const array of myArray) {
//     console.log(array)

// }

// let greetings = "sachin sain"
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue;
//     }
//     console.log(`char is as ${greet} `)
// }

// maps

// const map = new Map()
// map.set('gzb', "201001")
// map.set('shahadra', "110032")
// map.set('crossing', "201009")
// map.set('gzb',"201001") // maps are unique and ordered in nature
// console.log(map);

// for (const [key, value] of map) {
//     console.log(`city is ${key} and its pincode is ${value}`);
// }

// for of loop doesnt work for objects like maps because objects are not iterable here 

const myObj = new Object()
myObj.username = "sachin"
myObj.email = "sachin@gmail.com"
console.log(myObj)

for (const key of myObj) {
    console.log(key);  
}