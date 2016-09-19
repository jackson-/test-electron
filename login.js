const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.getElementById('login_button')
button.addEventListener('click', () => {
    event.preventDefault();
    main.open-url(event, `file://${__dirname}/form_component.html`)
}, false)