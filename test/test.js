const sneechesFunctions = require('../sneeches.js')
const expect = require('chai').expect

setSneeches = function() {
  return [{
      name: 'Bob',
      stars: true
    },
    {
      name: 'Sally',
      stars: false
    },
    {
      name: 'Suzie',
      stars: false
    }
  ]
}

describe('Sneech HOFs', function() {

  let sneeches
  beforeEach(function(){
    sneeches = setSneeches()
  })

  it('onlyStars', function() {
  })

  it('modifyStarCounts', function() {})

  it('addStars', function() {})

  it('totalStars', function() {})
})
