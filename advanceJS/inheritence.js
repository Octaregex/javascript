class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`the username is ${this.username}`);
        
    }
}

class server extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    tellme(){
        console.log(`${this.username}`);
        
    }
}

const chai = new server("sachin","sain@google.com", "123")
chai.tellme()
chai.logme()