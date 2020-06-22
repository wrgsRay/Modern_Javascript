const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('my content is copyright')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', e => {
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    box.textContent = `\n x pos - ${e.offsetX} \n y pos - ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX)
    console.log(e.pageY)
})