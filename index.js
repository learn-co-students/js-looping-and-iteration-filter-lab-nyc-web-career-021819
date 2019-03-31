// Code your solution in this file
function findMatching(drivers, string) {
// lowercase the string
let lcDrivers = lowerCaseArray(drivers)
let filteredDrivers = []
let filteredDriversIndices = []
let index = 0
let lcString = string.toLowerCase()
function lowerCaseArray(array) {
  newArray = []
  for (const element of array) {
    newArray.push(element.toLowerCase())
  }
  return newArray
}

function filterByString(lcdriver) {
  if (lcdriver === lcString) {
    filteredDriversIndices.push(index)
    index++;
  } else {
    index++;
  }
}

lcDrivers.filter(filterByString)


for (let index of filteredDriversIndices) {
filteredDrivers.push(drivers[index])
}

return filteredDrivers
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( function (driver) {return driver.substring(0, string.length) === string})
}

function matchName(drivers, string) {
  return drivers.filter( function (driver) {return driver['name'] === string})
}

