const electron  = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let win  = new BrowserWindow({width:800, height:600})
    win.loadURL(`file://${__dirname}/index.html`)
    win.openDevTools();
})

exports.openWindow = () => {
    let win = new BrowserWindow({width:400, height:200})
    win.loadURL(`file://${__dirname}/form_component.html`)
}