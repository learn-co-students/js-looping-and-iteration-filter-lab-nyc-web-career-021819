// Code your solution in this file

function findMatching(array, name) {
  return array.filter(function (elem) { return elem.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(array, string) {
  return array.filter(function (driver) { return driver.startsWith(string) } );
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) { return driver.name === name; });
}
