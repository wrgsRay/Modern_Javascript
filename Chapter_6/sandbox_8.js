// const button = document.querySelector('button')
//
// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'something new'
    // ul.append(li)
    ul.prepend(li)
})

// const items = document.querySelectorAll('li')
//
// // items.forEach(item => {
// //     item.addEventListener('click', () => {
// //         item.classList.toggle('finished-task')
// //     })
// // })
//
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through'
//         e.target.remove();
//     })
// })

ul.addEventListener('click', e => {
    // console.log('UL event')
    if(e.target.tagName === 'LI') {
        e.target.remove()
    }
})