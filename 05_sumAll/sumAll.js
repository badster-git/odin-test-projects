const sumAll = (a, b) => {
  if (a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number") {
    const start = a < b ? a : b;
    const stop = b > a ? b : a;
    const rangeArray = Array(Math.ceil((stop + 1 - start) / 1))
      .fill(start)
      .map((x, y) => x + y);

    return rangeArray.reduce((acc, cv) => acc + cv, 0);
  } else return "ERROR";
};

module.exports = sumAll;
