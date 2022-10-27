const express = require('express');

const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
}, 100);
});

const app = express();

// monkey patch every served HTML so they know of changes
app.use(connectLivereload());

app.use(express.static(__dirname));

app.listen(3000);

console.log('Server running at http://localhost:3000/');
