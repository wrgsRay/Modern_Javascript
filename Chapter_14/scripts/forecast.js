const key = 'FdPGM4LPhH4cQBFZIwFYeGJTtvFrtXWQ'

// Get weather info
const getWeather = async (cityKey) => {
    const baseURL = 'https://dataservice.accuweather.com/currentconditions/v1/'
    query = `${cityKey}?apikey=${key}`

    const response = await fetch(baseURL + query)
    const data = await response.json()

    return data[0]
}

// Get City info
const getCity = async (city) => {

    const baseURL = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(baseURL + query)
    const data = await response.json()

    return data[0]
}

// getCity('manchester').then(data => {
//     return getWeather(data.Key)
// }).then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))

