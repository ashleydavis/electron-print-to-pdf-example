const { app, BrowserWindow } = require('electron')
const fs = require('fs')

app.on('ready', () => {
    let win = new BrowserWindow({ width: 1600, height: 1600 })
    // win.webContents.openDevTools();
    win.loadURL('https://microsoft.github.io/monaco-editor/playground.html')
    
    win.webContents.on('did-finish-load', () => {
        setTimeout(() => {
            win.webContents.printToPDF({}, (error, data) => {
                if (error) throw error
                fs.writeFile('print.pdf', data, (error) => {
                  if (error) throw error
                  console.log('Write PDF successfully.')
                })
              });
        
        }, 10000);


    });
});
