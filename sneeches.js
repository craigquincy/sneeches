// create a method that returns only star bellied sneeches
const onlyStars = (sneeches) => {
  return sneeches.filter((sneech) => sneech.stars)
}

// create a function that a creates a new list of sneeches where stars are changed to an integer count instead of a boolean
let modifyStarCounts = (sneeches) => {
  return sneeches.map((sneech) => {
    sneech.stars = sneech.stars === true ? 1 : 0
    return sneech
  })
}


// create a method that totals the number of stars in all sneeches
// note: assume modifyStarCounts has been run
let totalStars = function(sneeches) {
  return sneeches.reduce((prev, next) => prev.stars + next.stars, 0)
}

// using forEach add one more star add to each sneech (do not return anything)
// note: assume modifyStarCounts has been run

let addStars = function(sneeches){
  sneeches.forEach((sneech, index) => {
    sneech.stars += 1
  })
}

module.exports = {
  onlyStars, modifyStarCounts, totalStars, addStars
}
