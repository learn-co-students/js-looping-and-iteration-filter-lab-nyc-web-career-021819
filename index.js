// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(findName) {return findName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name){
  let beginningName = name.length;
  return drivers.filter(function(findName) {return findName.slice(0, beginningName) === name;
  });
}

function matchName(drivers, name){
  return drivers.filter(function(findName) {return findName.name.toLowerCase() === name.toLowerCase();
  });
}
