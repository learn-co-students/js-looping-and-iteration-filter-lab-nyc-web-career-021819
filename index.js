const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (arr, query) => {
  return arr.filter(el => el.toLowerCase() === query.toLowerCase());
};

const fuzzyMatch = (arr, query) => {
  return arr.filter(el => el.slice(0,2).toLowerCase() === query.toLowerCase());
}

const matchName = (arr, query) => {
  return arr.filter(el => el["name"] === query)
}
