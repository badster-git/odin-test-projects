const repeatString = (input, rTimes) => {
  let finalString = "";
  if (rTimes >= 0) {
    for (let i = 0; i < rTimes; i++) {
      finalString += input;
    }
  } else finalString = "ERROR";
  return finalString;
};

module.exports = repeatString;
