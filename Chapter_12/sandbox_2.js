// fetch api

fetch('json/luigi.json').then((response) => {
    console.log('resolved', response)
    return response.json()
}).then(data => {
    console.log(data)
}).catch((err => {
    console.log('Network error', err)
}))