const { app, BrowserWindow } = require('electron')
const configs = require('./configs.json')
function createWindow () {
  const win = new BrowserWindow(configs)

  win.setIgnoreMouseEvents(true)
  win.setMenu(null)

  win.loadFile('index.html')

  win.once('ready-to-show', win.show)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


