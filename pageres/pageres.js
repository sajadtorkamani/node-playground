const Pageres = require('pageres');
const path = require('path');

const screenshotsPath = path.join(__dirname, 'screenshots');
const resolutions = [
  '640x360',
  '1920x1080',
  '1366x76',
  '1024x76',
];

(async () => {
  console.log('Working...');

  await new Pageres({ delay: 2 })
    .src('https://sajadtorkamani.com', resolutions)
    .dest(screenshotsPath)
    .run();

  console.log('Done.');
})();
