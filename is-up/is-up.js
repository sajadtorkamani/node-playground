#!/usr/bin/env node
const isUp = require('is-up');
const Table = require('cli-table3');

const sites = [
  'https://sajadtorkamani.com',
  'https://reactjs.com',
  'https://stgstaging.com'
];

const table = new Table({
  head: ['Url', 'Status']
});

(async () => {
  console.log('Working...');

  for (let site of sites) {
    const isSiteUp = await isUp(site);

    table.push([site, isSiteUp ? 'Up' : 'Down']);
  }

  console.log(table.toString());
})();
