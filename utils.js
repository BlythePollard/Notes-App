const name = 'Blythe'

//each module has its own scope-- utils has own scope, app has own scope
//they cannot access each other's variables, even 
//when loaded in with require UNLESS we explicitly EXPORT

const add = function(a, b) {
    return a + b
}

module.exports = add
//this will eventually be an object