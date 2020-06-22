const link = document.querySelector('a')

console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://etsy.com')
link.innerText = 'etsy.com'

const msg = document.querySelector('p')
console.log(msg.getAttribute('class'))
msg.setAttribute('class', 'noterror')
msg.setAttribute('style', 'color: green')