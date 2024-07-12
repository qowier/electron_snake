//main.js
const { app, BrowserWindow } = require('electron');

var mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			nodeIntegration: true,
      contextIsolation: false,
		},
	});

	mainWindow.loadFile('index.html');

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
	if (mainWindow === null) createWindow();
});