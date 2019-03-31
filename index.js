// Code your solution in this file

function findMatching(arr, query) {
	return arr.filter(function(el) {
    return el === query.toLowerCase() || el === query;
  });
};

function fuzzyMatch(arr, query) {
  return arr.filter(function(el) {
    return el.indexOf(query) === 0;
  })
};

function matchName(arr, query) {
  return arr.filter(function(el) {
    return el.name === query;
  })
};
