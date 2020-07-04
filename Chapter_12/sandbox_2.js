// async & await

const getTodos = async () => {
  const response = await fetch("json/luigis.json")

  if (response.status === 404) {
      throw new Error('Error: URL not found')
  } else if (response.status !== 200) {
      throw new Error('Error fetching(catch all error)')
  }
  const data = await response.json();
  return data;
};

const test = getTodos()
    .then((data) => console.log(`resolved:`, data))
    .catch(err => console.log('rejected:', err.message))



// fetch('json/luigi.json').then((response) => {
//     console.log('resolved', response)
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch((err => {
//     console.log('Network error', err)
// }))
