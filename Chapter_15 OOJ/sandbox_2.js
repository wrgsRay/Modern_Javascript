// old way to create class

function User(username, email){
    this.username = username
    this.email = email
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this
}

function Admin(username, email, title){
    User.call(this, username, email)
    this.title = title
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(){
    // delete a user
}

const userOne = new User('mario', 'wtf@wtf')

console.log(userOne)
userOne.login().logout()