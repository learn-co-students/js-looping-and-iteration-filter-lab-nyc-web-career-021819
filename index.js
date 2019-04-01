// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  let lettersLength = string.length;
  return array.filter(function(driverName){
    return driverName.slice(0, lettersLength) === string;
  });
}

function matchName(array, string) {
  return array.filter(function(driverName){
    return driverName.name.toLowerCase() === string.toLowerCase();
  });
}
