#!/usr/bin/env node
const wifiPassword = require('wifi-password');

wifiPassword().then(password => {
  console.log(`Your password is: ${password}`);
});
