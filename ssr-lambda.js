
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const server = require('./dist/ng-test-app/server/main');

const app = server.app();

app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(app);

module.exports.render = (event, context) => {
    awsServerlessExpress.proxy(serverProxy, event, context);
};
