const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if(request.readyState === 4) {
                reject(`Error getting resource at ${resource}`)
            }
        })
        request.open('GET', resource)
        request.send()
    })

}

getTodos('json/luigi.json').then(data => {
    console.log(data)
    return getTodos('json/mario.json')
}).then(data => {
    console.log(data)
    return getTodos('json/shaun.json')
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
