import './styles/tabs.css'

class Tabs {
    constructor(container) {
        this.container = container
        this.tabs = container.querySelectorAll('.trigger')
    }
    init(){
        this.container.addEventListener('click', e => {
            if (e.target.classList.contains('trigger')) {
                this.toggleTabs(e)
                this.toggleContent(e)
            }
        })
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active')
    }
    toggleContent(e) {
        // remove current active classes
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active')
        })
        // add new active class to content
        const selector = e.target.getAttribute('data-target')
        const content = this.container.querySelector(selector)
        content.classList.add('active')
    }
}

export {Tabs as default}