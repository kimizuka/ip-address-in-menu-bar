const { app, Tray, Menu } = require('electron');
const ip = require('ip');
const path = `${ __dirname }/icon.png`;

let tray;

app.on('ready', () => {
  const menu = new Menu.buildFromTemplate([{
    label: 'reload',
    click: render
  },{
    label: 'exit',
    role: 'quit'
  }]);

  app.dock.hide();

  tray = new Tray(path);
  tray.setContextMenu(menu);

  render();
});

function render() {
  const address = ip.address();

  tray.setToolTip(address);
  tray.setTitle(address);
}