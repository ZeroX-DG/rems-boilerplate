const { app, Menu } = require('electron')

let mainWindow = null

const isSecondInstance = app.makeSingleInstance(function (commandLine, workingDirectory) {
  if (mainWindow) {
    if (process.platform === 'win32') {
      mainWindow.minimize()
      mainWindow.restore()
    }
    mainWindow.focus()
  }
  return true
})

if (isSecondInstance) {
  app.quit()
}

app.on('ready', () => {
  mainWindow = require('./app-window')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

