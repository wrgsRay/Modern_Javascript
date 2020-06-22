// const para = document.querySelector('div.error')
//
// console.log(para)

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para)
})

console.log(paras.length)

const errors = document.querySelectorAll('.error')

errors.forEach(error => {
    console.log(error)
})