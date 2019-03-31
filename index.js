// Code your solution in this file
function findMatching(obj, name) {
  return obj.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(obj, name) {
  let word = name.length;
  return obj.filter(function (driverName) {
    return driverName.slice(0, word) === name;
  });
}

function matchName (obj, name) {
  return obj.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
