const { app, BrowserWindow } = require('electron');
const config = require('./config');

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.loadURL(config.url);
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