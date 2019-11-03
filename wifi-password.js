const wifiPassword = require('wifi-password');

wifiPassword().then(password => {
  console.log('--------------------');
  console.log(password);
  console.log('--------------------');
});
