let sneechesFunctions = require('../sneeches.js')
let expect = require('chai').expect

var sneeches = [
  {
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

describe('Sneech HOFs', function() {

  it('onlyStars', function() {
    expect(sneechesFunctions.onlyStars(sneeches)).to.deep.equal([{
      name: 'Bob',
      stars: true
    }])
  })

  it('modifyStarCounts', function() {
    expect(sneechesFunctions.modifyStarCounts(sneeches)).to.deep.equal([
      {
        name: 'Bob',
        stars: 1
      },
      {
        name: 'Sally',
        stars: 0
      },
      {
        name: 'Suzie',
        stars: 0
      }])
  })

  it('addStars', function() {
    sneechesFunctions.addStars(sneeches)
    expect(sneeches).to.deep.equal([  {
        name: 'Bob',
        stars: 2
      },
      {
        name: 'Sally',
        stars: 1
      },
      {
        name: 'Suzie',
        stars: 1
      }])
  })
})
