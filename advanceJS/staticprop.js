class user{
    constructor(username){
        this.username = username
        
    }

    logme(){
        console.log(`the username is ${this.username}`);
        
    } 

   static createId(){
        return "123"
        
    }
}

const help = new user("sachin")
help.logme()
//console.log(help.createId());


class server extends user{
    constructor(username, email, password){
        super(username)
        this.password = password
        this.email = email
        
    }
}

const connect = new server("hitesh", "sachin@gmail.com", "123")
console.log(connect.logme());

//console.log(connect.createId())

