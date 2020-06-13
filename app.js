const fs = require('fs')
//require is going to load in the fs module
//store return value to fs variable (can be called whatever)

fs.writeFileSync('notes.txt', 'My name is Blythe.')
//writeFileSync writes data to a file
//this will write text to the notes.txt file
//if this file doesn't exist, creates it and then writes in text
//changing text will replace previous text

fs.appendFileSync('notes.txt', ' this message is appended')