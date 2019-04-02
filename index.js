// Code your solution in this file



function findMatching(arr, str){
  return arr.filter(n => n.toLowerCase() === str.toLowerCase()
)};

function fuzzyMatch(arr, str){
  return arr.filter(n => n.slice(0,str.length).toLowerCase() === str.toLowerCase());
};

function matchName(arr, str){
  return arr.filter(n => n.name.toLowerCase() == str.toLowerCase());
};
