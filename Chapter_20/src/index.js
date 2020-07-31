import Tooltip from './ninja-ui/tooltip'
import Dropdown from './ninja-ui/dropdown'
import Tabs from './ninja-ui/tabs'
import Snackbar from './ninja-ui/snackbar'
import Copytext from './ninja-ui/copytext'

//create a tooltip
const tooltip = new Tooltip(document.querySelectorAll('.tooltip'))
tooltip.init()

// create dropdown instances
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init()
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

// create snack bar
const snackbar = new Snackbar();
snackbar.init()

const button = document.querySelector('.snackbar-trigger')
button.addEventListener('click', () =>{
    snackbar.show('you clicked me :)')
})

const copybutton = new Copytext(document.querySelector('.copytext'))
copybutton.init()
