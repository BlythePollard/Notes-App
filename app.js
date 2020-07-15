const chalk = require('chalk')

const notes = require('./notes.js')

const notesOutput = notes()

console.log(notesOutput)

console.log(chalk.green.inverse.bold('success!'))