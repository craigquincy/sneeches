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
  beforeEach(function() {
    sneeches = setSneeches()
  })

  it('onlyStars filters out sneeches with stars', function() {
    // zero test case
    expect(sneechesFunctions.onlyStars([])).to.deep.equals([])

    // one test case
    expect(sneechesFunctions.onlyStars([sneeches[0]])).to.deep.equals(
      [{
        name: 'Bob',
        stars: true
      }])

    // many test case
    expect(sneechesFunctions.onlyStars(sneeches)).to.deep.equals(
      [{
        name: 'Bob',
        stars: true
      }])
  })

  it('modifyStarCounts', function() {
    // zero test
    expect(sneechesFunctions.modifyStarCounts([])).to.deep.equals([])

    // 1 test case
    expect(sneechesFunctions.modifyStarCounts([sneeches[0]])).to.deep.equals(
      [{
        name: 'Bob',
        stars: 1
      }])

    // many test case
    expect(sneechesFunctions.modifyStarCounts(sneeches)).to.deep.equals(
      [{
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

  it('totalStars', function() {
    sneeches = sneechesFunctions.modifyStarCounts(sneeches)

    // zero test
    expect(sneechesFunctions.totalStars([])).to.eq(0)

    // 1 test case
    expect(sneechesFunctions.totalStars([sneeches[0]])).to.eq(1)

    // many test
    sneeches.push({name: 'Billy', stars: 10})
    expect(sneechesFunctions.totalStars(sneeches)).to.eq(11)
  })

  it('addStars', function() {
    sneeches = sneechesFunctions.modifyStarCounts(sneeches)

    // zero test
    let sneechesZero = []
    sneechesFunctions.addStars(sneechesZero)
    expect(sneechesZero).to.deep.equals([])

    // 1 test case
    let oneSneech = [{
      name: 'Bob',
      stars: 1
    }]
    sneechesFunctions.addStars(oneSneech)
    expect(oneSneech).to.deep.equals(
      [{
        name: 'Bob',
        stars: 2
      }])

    // many test case
    sneeches = sneechesFunctions.modifyStarCounts(sneeches)
    sneechesFunctions.addStars(sneeches)
    expect(sneeches).to.deep.equals(
      [{
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
