// object literals

const blogs =[
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 30}
]

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 30}
    ],
    login() {
        console.log('the user has logged in')
    },
    logout() {
        console.log('The user has logged out')
    },
    logBlogs() {
        this.blogs.forEach(entry => {
            console.log(entry.title, entry.likes)
        })
    }
}

user.login()
user.logout()
user.logBlogs()