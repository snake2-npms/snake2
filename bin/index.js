#!/usr/bin/env node
require('snake2-utils')
const program = require('commander')
const packageJson = require('../package.json')
const { exec } = require('child_process')
program.version(packageJson.version)

// snake2 new project
program.command('new <project>')//.arguments('<project>')
  .description('new project')
  .action(require('./actions/new'))

program.parse(process.argv)