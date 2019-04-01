function findMatching(drivers, name) {
	return drivers.filter(function(cb) { return cb === name.toLowerCase() || cb === name;} )
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(cb) { return cb.indexOf(name) === 0 })
}

function matchName(drivers, name) {
  return drivers.filter(function(cb) { return cb.name === name })
}
