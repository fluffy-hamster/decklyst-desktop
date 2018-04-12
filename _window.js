const { app, BrowserWindow } = require('electron'),
    path = require('path'),
    url = require('url');

function createWindow() {
    win = new BrowserWindow({ 
        width: 1160,
        minWidth: 1160,
        maxWidth: 1160,
        height: 767,
        minHeight: 767,
        maxHeight: 767,
        titleBarStyle: 'hiddenInset'
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'tmp/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})