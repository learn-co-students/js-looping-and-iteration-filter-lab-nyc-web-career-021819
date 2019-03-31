// Code your solution in this file

function findMatching(drivers, string){
  const filtered = drivers.filter(str => string.toLowerCase()==str.toLowerCase())
  return filtered
}

function fuzzyMatch(drivers, string){
  const filtered = drivers.filter(str => string.slice(0,2)==str.slice(0,2))
  return filtered
}

function matchName(drivers, name){
  const filtered = drivers.filter(hash => hash.name == name)
  return filtered
}
