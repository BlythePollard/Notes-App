const validator = require('validator')
//store contents that come back in this const

const notes = require('./notes.js')

const notesOutput = notes()

console.log(notesOutput)

console.log(validator.isEmail('blythe@gmail.com'))
console.log(validator.isURL('hello'))
//using some of the methods available from validator (see documentation)