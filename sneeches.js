// create a method that returns only star bellied sneeches
const onlyStars = (sneeches) => {
  return sneeches.filter((sneech) => sneech.star)
}

// create a function that a new list of sneeches where stars to is an integer count instead of a boolean
let modifyStarCounts = (sneeches) => {
  return sneeches.map((sneech) => sneech.stars = typeOf(sneeches.stars) === 'Boolean' ? (sneeches.stars ? 1 : 0) : sneeche.stars
}


// create a method that totals the number of stars in all sneeches
let totalStars = function(sneeches){
  return sneeches.reduce((prev, next) => prev + next, 0)
}

// using forEach add one more star add to each sneech (do not return anything)
let addStars = function(sneeches){
  sneeches.forEach((sneech, index) => {
    sneech.stars += 1
  })
}

module.exports = {
  onlyStars, modifyStarCounts, totalStars, addStars
}
