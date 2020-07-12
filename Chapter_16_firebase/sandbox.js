const list = document.querySelector('ul')
const form = document.querySelector('form')
const unsub_button = document.querySelector('button')


const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate()
    let author = recipe.author
    let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <div>${author}</div>
        <button class="btn btn-outline-danger btn-sm my-2">Delete</button>
    </li>
    `
    list.innerHTML += html
}

const deleteRecipe = id => {
    const recipes = document.querySelectorAll('li')
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove()
        }
    })
}

// get documents using realtime listener
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id)
        } else if(change.type === 'removed') {
            deleteRecipe(doc.id)
        }
    })
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

// deleting data

list.addEventListener('click',e => {
    if(e.target.tagName.toLowerCase() === 'button'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log(`recipe deleted`)
        })
    }
})

// unsub from database changes
unsub_button.addEventListener('click',() => {
    unsub()
    console.log('unsubscribed from collections changes')
})