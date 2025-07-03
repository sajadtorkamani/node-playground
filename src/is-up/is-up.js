#!/usr/bin/env node
const isUp = require('is-up')
const Table = require('cli-table3')
const colors = require('colors/safe')

const sites = [
  'https://sajadtorkamani.com',
  'https://reactjs.com',
  'https://stgstaging.com',
]

const table = new Table({
  head: [colors.white('Url'), colors.white('Status')],
})(async () => {
  console.log('Working...')

  for (let site of sites) {
    const isSiteUp = await isUp(site)

    table.push([site, isSiteUp ? colors.green('Up') : colors.red('Down')])
  }

  console.log(table.toString())
})()
