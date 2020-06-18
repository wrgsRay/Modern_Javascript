// get a reference to the 'ul'
const ul = document.querySelector('.people')

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chunli']

let html =``

people.forEach(person => {
    // create HTML template
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html