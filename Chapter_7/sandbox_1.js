const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    const username = form.username.value
    if (pattern.test(username)) {
        feedback.textContent = 'That user name is valid'
    } else {
        feedback.textContent = 'username must contain letters only and be between 6 & 12 characters long'
    }
})

// const username = 'shaunp1@'
// const pattern = /^[a-zA-Z]{6,12}$/

// let result = pattern.test(username)
// if (result){
//     console.log('regex test passed')
// } else {
//     console.log('regex test failed')
// }

// let result = username.search(pattern)
// console.log(result)


// live feedback
const key = form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value)
    if (pattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    } else {
        form.username.setAttribute('class', 'error')
    }
})