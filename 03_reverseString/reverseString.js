const reverseString = (str) => {
  let finalString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    finalString += str[i];
  }
  return finalString;
};

module.exports = reverseString;
