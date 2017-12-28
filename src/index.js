import app from './app'; // configuring express app, e.g. routes and logic

const port = 9000;

function startServer() {
  const httpServer = app.listen(port, (error) => {
    if (error) {
      console.error(error);
    } else {
      const address = httpServer.address();
      console.info(`==> 🌎 Listening on ${address.port}. Open up http://localhost:${address.port}/ in your browser.`);
    }
  });

  // Hot Module Replacement API
  if (module.hot) {
    // Hot reload of `app` and related modules.
    let currentApp = app;
    module.hot.accept('./app', () => {
      httpServer.removeListener('request', currentApp);
      import('./app').then(m => {
        httpServer.on('request', m.default);
        currentApp = m.default;
        console.log('Server reloaded!');
      })
        .catch(err => console.error(err));
    });

    // Hot reload of entry module (self). It will be restart http-server.
    module.hot.accept();
    module.hot.dispose(() => {
      console.log('Disposing entry module...');
      httpServer.close();
    });
  }
}

startServer();