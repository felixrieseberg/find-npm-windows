const chai = require('chai')
const mockery = require('mockery')

chai.should()
mockery.enable({ warnOnUnregistered: false })

// Run tests
require('./lib/find-npm')
