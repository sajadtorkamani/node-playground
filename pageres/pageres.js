#!/usr/bin/env node
const path = require('path');
const Pageres = require('pageres');
const rimraf = require('rimraf');

const screenshotsPath = path.join(__dirname, 'screenshots');
const resolutions = ['640x360', '1920x1080', '1366x76', '1024x76'];
const url = process.argv[2] || 'http://sajadtorkamani.com';

(async () => {
  console.log('Working...');

  // Clear existing screenshots
  rimraf.sync(screenshotsPath);

  // Go and capture new ones!
  await new Pageres({ delay: 2 })
    .src(
      url,
      resolutions
    )
    .dest(screenshotsPath)
    .run();

  console.log(`Done! Screenshots saved to ${screenshotsPath}`);
})();
