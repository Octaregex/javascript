// reduce is mostly used where we need to add multiple arry items
const arr= [1,2,3,4,5]

const newArr= arr.reduce((acc, currval)=>{
    //console.log(acc);
    
    return acc+currval
},3)

//console.log(newArr);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cart= shoppingCart.reduce((acc,items)=> (acc +items.price),0)
console.log(cart);


