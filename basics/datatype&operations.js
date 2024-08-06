// let score = 1;
// let checkScore = Boolean(score)
// console.log(checkScore)
// let firstNumber = "123"
// let score = Number(firstNumber)
// console.log(score)
// console.log(typeof score)
// console.log('2'=== 2)
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// here comparison worl differently and it will operator convert the null value as o or NAN
// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)

//datatypes summery in JS
// premetive data type
//Number,BigInt,String,Boolean,null,undefined,Symbol
// let id1 = Symbol('123')
// let id2 = Symbol('123')
// console.log(id1 === id2)
// console.log(typeof id1)
 let number1 = 34767162621686486268326823n
 console.log(typeof number1)


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // memory managment

 // premetive datatype will store in stack with copied value and non-premetive datatype will store in heap with reference to original vlaue

 let firstName = "sachin";
 let othersName = firstName;
 othersName = "hitesh";
 console.log(firstName)
 console.log(othersName)


 let userone = {
    email : "sachin@gmail.com",
    upi : "sachin12@icici"
 }

 let usertwo = userone
 usertwo.email = "vaishali12@gmail.com"

 console.log(userone.email)
 console.log(usertwo.email)