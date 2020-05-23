const { app, BrowserWindow } = require('electron');
const config = require('./config');

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 767,
    height: 430,
    frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    movable: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // window.loadURL(config.url);
  window.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});