// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })//end of filter
}//end of findMatching

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.slice(0, string.length) === string
  })//end of filter
}//end of fuzzyMatch

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string
  })//end of filter
}//end of matchName
