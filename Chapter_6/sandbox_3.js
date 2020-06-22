const para = document.querySelector('p')

// console.log(para.innerHTML)

// para.innerText = 'WTF'

const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     para.innerText += ' lol'
// })

const content = document.querySelector('.content')

// content.innerHTML = '<h2>This is content</h2>'

const people = ['mario', 'lugui', 'yoshi']

people.forEach(person => {
    content.innerHTML += `<p class="people">${person}</p>`
})