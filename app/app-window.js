const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.resolve(__dirname, '../resources/icon/icon512.png')
  })

  const url = 'file://' + path.resolve(__dirname, './index.html')

  mainWindow.loadURL(url)
  if (process.env.NODE_ENV === 'dev') {
    mainWindow.webContents.openDevTools()
  }
}

createWindow()

module.exports = mainWindow
