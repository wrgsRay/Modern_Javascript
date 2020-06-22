// const content = document.querySelector('p')
//
// console.log(content.classList)
// content.classList.replace('error', 'success')

const content = document.querySelectorAll('p')
content.forEach(line => {
    if (line.textContent.includes('error')){
        line.classList.add('error')
    } else if (line.textContent.includes('success')){
        line.classList.add('success')
    }
})

const title = document.querySelector('.title')

title.classList.toggle('test')