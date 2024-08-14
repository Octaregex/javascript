const myObj = {
    id: 123,
    username: "sachin",
    userEmail: "sachinsain@gmail.com"
}
console.log(myObj)

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
    
}

const myArray = new Array(1,2,3,4,5)

for (const key in myArray) { // it will return the keys of are rather than the array
    console.log(`${key} : ${myArray[key]}`);
    
}

// maps are not iterables for for-in loops

