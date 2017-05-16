var commandLineArgs = require('yargs').argv;

var apiClient = require('./api_client');

apiClient.createMessage({
  body: commandLineArgs.body,
  senderId: commandLineArgs.senderId,
  receiverId: commandLineArgs.receiverId
})
