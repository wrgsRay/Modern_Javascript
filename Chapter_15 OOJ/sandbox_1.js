class User {
    constructor(username, email){
        // set up properties
        this.username = username
        this.email = email
        this.score = 0
    }
    login(){
        console.log(`${this.username} just logged in`)
        return this
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this
    }
    incScore(){
        this.score += 1
        console.log(`${this.user} has a score of ${this.score}`)
        return this
    }
}

const userOne = new User('mario', 'mario@wtf')
const userTwo = new User('luigi', 'luigi@wtf')

console.log(userOne, userTwo)
userOne.login()
userOne.logout()

userOne.incScore().incScore().login().logout()