const electron = require('electron');
const app = electron.app; // app:代表整个应用，用来获取应用程序生命周期中的各个事件
var BrowserWindow = electron.BrowserWindow;
var win = null;
app.on('ready', function () {
  // 创建窗口，并把窗口赋值给全局引用
  win = new BrowserWindow({
    // 为页面集成Node.js环境并赋予其中的js访问Node.js的能力
    webPreferences: {nodeIntegration: true}
  });
  win.loadFile('index.html');
  win.on('close', function () {
    win = null;
  });
});
app.on('window-all-closed', function () {
  app.quit();
});