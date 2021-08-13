const removeFromArray = (arr, ...elem) => {
  for (let i = 0; i < elem.length; i++) {
    if (arr.indexOf(elem[i]) !== -1) {
      const idxVal = arr.indexOf(elem[i]);
      arr = arr.slice(0, idxVal).concat(arr.slice(idxVal + 1));
    }
  }
  return arr;
};

module.exports = removeFromArray;
