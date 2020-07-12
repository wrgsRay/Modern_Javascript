const list = document.querySelector('ul')
const form = document.querySelector('form')


const addRecipe = (recipe) => {
    let time = recipe.created_at.toDate()
    let author = recipe.author
    let html = `
    <li>
        <div>${recipe.title}</div>
        <div>${time}</div>
        <div>${author}</div>
    </li>
    `
    list.innerHTML += html
}

db.collection('recipes').get().then(snapshot => {
    // when we have the data
    // console.log(snapshot.docs[0].data())
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        addRecipe(doc.data())
    })
}).catch(err => {
    console.log(err)
})

// add documents

form.addEventListener('submit',e => {
    e.preventDefault()

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
        author: 'test'
    }
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipes added')
    }).catch(err => {
        console.log(err)
    })

})