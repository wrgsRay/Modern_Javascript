const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const searchForm = document.querySelector('.search')

searchForm.addEventListener('submit', e => {
    e.preventDefault()
})

const generateTemplate = newTodo => {
    const outputHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
`

    list.innerHTML += outputHTML
}

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const newTodo = addForm.add.value.trim()

    if (newTodo) {
        generateTemplate(newTodo)
        addForm.reset()
    }

})

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

const filterTodos = (searchTerm) => {
    Array.from(list.children)
        .filter((child) => {
            return !child.textContent.toLowerCase().includes(searchTerm)
        })
        .forEach((filteredChild) => {
            filteredChild.classList.add('filtered')
        })
    Array.from(list.children)
        .filter((child) => {
            return child.textContent.toLowerCase().includes(searchTerm)
        })
        .forEach((filteredChild) => {
            filteredChild.classList.remove('filtered')
        })
}

// keyup event
search.addEventListener('keyup', () => {
    const searchTerm = search.value.trim().toLowerCase()
    filterTodos(searchTerm)
})

