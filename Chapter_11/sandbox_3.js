const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    clock.innerHTML = `
    <span>${hour}</span> : 
    <span>${minute}</span> :
    <span>${second}</span>
    `;
}

setInterval(tick, 1000)