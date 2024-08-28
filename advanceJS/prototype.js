let userName = "sachin  "
console.log(userName.length)

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`)
}

userName.truelength()
"vaishali    ".truelength()


/// array

let myarr = new Array("sachin", "vaishali", "yash")


const userOne = new Object()
userOne.userName = "sachin"
userOne.email = "sachin@gooogle.com"
userOne.getdetails = function(){
    console.log(`hello there`);
    
}
console.log(userOne);


Object.prototype.sachin = function () {
    console.log(`my name is sachin`)
}

userName.sachin();
myarr.sachin();
userOne.sachin();


// Array,objects, String, there are all objects and the further prototype of objects is null


// prototype inheritence


const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//console.log(TASupport.makevideo);


Object.setPrototypeOf(TeachingSupport, Teacher)




