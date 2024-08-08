// const score = new Number(40)
// console.log(score)
// console.log(typeof score.toString())
// console.log(score.toString().charAt(0))
// console.log(score.toFixed(2))
// console.log(score.toExponential(1))

// const balance = new Number(123.886)
// console.log(balance.toPrecision(4))

// const money = new Number(1000000)
// console.log(money.toLocaleString('en-IN')) // by defaultit provide output on us based 


//++++++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++++++++++

//math is an libray in js which provides various methods such as

console.log(Math.PI)
console.log(Math.random()) //by default the value of random method varies from o to 1
console.log(Math.sin(90*Math.PI/180)) // by default sin returns value in radian
console.log(Math.sqrt(9))
console.log(Math.max(10,20,8,99,19))
console.log(Math.min(1,3,4,1,9,0))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.2))
console.log(Math.pow(5,3))
console.log(Math.exp(4)) // calculate e^x 
console.log(Math.random()*10 + 1)

const max = 20 
const min = 10
console.log(Math.floor(Math.random()*(max-min +1)) + min)