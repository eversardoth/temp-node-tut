// CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const ever = require('./4-names');

const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor')

require('./7-mind-granade')

sayHi('susan')
sayHi(ever.john)
sayHi(ever.peter)
console.log(data)