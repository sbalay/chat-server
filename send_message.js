var commandLineArgs = require('yargs').argv;

var apiClient = require('./api_client');

apiClient.createMessage({
  body: commandLineArgs.body,
  sender_id: commandLineArgs.sender_id,
  receiver_id: commandLineArgs.receiver_id
})
