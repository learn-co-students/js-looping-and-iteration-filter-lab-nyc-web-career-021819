// Code your solution in this file
function findMatching(drivers, string) {
let filterArray = drivers.filter(function(member) {
  return member.toLowerCase() === string.toLowerCase();
});
return filterArray
}

function fuzzyMatch(drivers, string) {
let filterArray = drivers.filter(function(member) {
  return member.startsWith(string);
})
return filterArray
}

function matchName(drivers, string) {
  let filterArray = drivers.filter(function(member) {
    return member["name"] === string;
  })
  return filterArray
}
