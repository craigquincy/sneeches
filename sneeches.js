// create a method that returns only star bellied sneeches
const onlyStars = (sneeches) => {
  return sneeches.filter(sneech => sneech.stars)
}

// create a function that a creates a new list of sneeches where stars are changed to an integer count instead of a boolean
const modifyStarCounts = sneeches => {
  // map!
  return sneeches.map(sneech => {
    sneech.stars = sneech.stars ? 1 : 0  // ternary operator

    // if (sneech.stars === true) {
    //   sneech.stars = 1
    // }
    // else {
    //   sneech.stars = 0
    // }

    return sneech
  })
}


// create a method that totals the number of stars in all sneeches
// note: assume modifyStarCounts has been run
const totalStars = (sneeches) => {
  return sneeches.reduce((result, sneech) => result + sneech.stars, 0)
}

// using forEach add one more star add to each sneech (do not return anything)
// note: assume modifyStarCounts has been run

const addStars = (sneeches) => {
  sneeches.forEach(sneech => sneech.stars += 1)
}

module.exports = {
  onlyStars, modifyStarCounts, totalStars, addStars
}
