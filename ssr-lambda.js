
const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const server = require('./dist/ng-test-app/server/main');

// function createMultipleLocaleServer() {
//   const multipleLocaleServer = express();

//   ['hr'].forEach((locale) => {
//     multipleLocaleServer.use(`/${locale}`, server.app(locale));
//   });

//   return multipleLocaleServer;
// }

// const app = createMultipleLocaleServer();

const app = server.app('en-GB');

app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(app);

module.exports.render = (event, context) => {
    awsServerlessExpress.proxy(serverProxy, event, context);
};
