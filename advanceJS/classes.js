class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        console.log(`the password is ${this.password}abc`);
        
    }

    changeUserName(){
        console.log(`the username is ${this.username.toUpperCase()}`)
    }
}

const chai = new user("sachin","sachinsain292gmail.com", "123")
chai.changeUserName()
chai.encryptpassword()

//// behind the scene 


function user2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}


user2.prototype.changeUserName = function(){
    console.log(`the username is ${this.username.toUpperCase()}`);
    
}

user2.prototype.encryptpassword = function(){
    console.log(`the username is ${this.password}`);
}

const tea = new user2("sachin", "sachin@google.com", "123")

tea.changeUserName()
tea.encryptpassword()
