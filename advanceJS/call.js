// call is an method provided by javascript to store the reference of an explict called function

const setUser = function(userName){
    this.userName = userName
    console.log("called");   
}


const details =  function(userName, email, password){
    setUser.call(this,userName)
    this.email = email;
    this.password = password;

}

const printme = new details("hitesh", "sachinsa@gmail.com", 123)
console.log(printme);
