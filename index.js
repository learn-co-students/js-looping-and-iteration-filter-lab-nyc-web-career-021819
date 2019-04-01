// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() ===   name.toLowerCase() ;
  });
  }

function fuzzyMatch(list, letters) {
  let lengthOfLetter = letters.length
  return list.filter(function (driverName) {
    return driverName.slice(0,lengthOfLetter) === letters
  });
}
function matchName(object, name) {
  return object.filter(function (driver) {
    return driver.name === name
  });
};
