// Code your solution in this file

const findMatching = function (array, string) {
  return array.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

const fuzzyMatch = function (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().startsWith(string.toLowerCase())
  })
}

const matchName = function (drivers, string) {
  return drivers.filter(function (driver) {
    return driver["name"] === string
  })
}
