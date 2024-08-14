const arr = [2,4,6,8,10]
const newArr = arr
.map((num)=> num*10)
.map((num)=> num +1)
.filter((num)=> num ==41)
console.log(newArr);
