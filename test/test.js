let sneechesFunctions = require('../sneeches.js')
let expect = require('chai').expect

let sneeches1 = [
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
    expect(sneechesFunctions.onlyStars(sneeches1)).to.deep.equal([{
      name: 'Bob',
      stars: true
    }])
  })

  it('modifyStarCounts', function() {
    expect(sneechesFunctions.modifyStarCounts(sneeches1)).to.deep.equal([
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
        stars: 1
      }])
  })

  it('addStars', function() {
    sneechesFunctions.addStars(sneeches1)
    expect(sneeches1).to.deep.equal([  {
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
