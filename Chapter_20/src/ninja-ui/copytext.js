import './styles/copytext.css'

class Copytext {
    constructor(element) {
        this.copybutton = element
        this.message = element.getAttribute('data-message')
    }

    init() {
        this.copybutton.addEventListener('click', () => {
            navigator.clipboard.writeText(this.message)
                .then(() => {})
                .catch(err => {console.log(err)})
        })

    }
}

export {Copytext as default}