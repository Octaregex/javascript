// // const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            console.log("there is no error");
            resolve({username:"sachin sain", email: "sachinsain963@gmail.com"})
            
        } else{
            reject("error somethimg is wrong")
        }
    }, 1000);
    
   //chaining in promise

    
}) 

promiseFour.then((user)=>{
    console.log(user);
    return user.username;  
}).then((username)=>{
    console.log(username);   
}).catch((error)=>{
    console.log(error);   
}).finally(() => console.log("the promise is either resolved or rejected"))


// promise five

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            console.log("there is no error");
            resolve({username:"sachin sain", email: "sachinsain963@gmail.com"})
            
        } else{
            reject("error somethimg is wrong")
        }
    }, 1000);
}) 

async function consumePromiseFive() {
    try {
        let response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
    
}

consumePromiseFive()

async function getallUser() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
   
   } catch (error) {
    console.log("E:", error);
    
   }
   
}
getallUser()