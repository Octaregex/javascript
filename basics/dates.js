// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())

//let myCreatedDate = new Date('2009','4','11') 
//let myCreatedDate = new Date('2009','4','11','6','25','59') 
// let myCreatedDate = new Date("09-08-2024") 
// console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // provides millsecond from the 1st jan 1970 to current date and time
// console.log(Math.floor(Date.now()/1000))// provide seconds
// console.log(Math.floor(Date.now()/(1000*60))) //provides minutes

let myDate = new Date() 
console.log(myDate.toLocaleString('default',{
    weekday:"short"
    
}))