const ftoc = (fTemp) => {
  const calcTemp = (fTemp - 32) * (5 / 9);
  return calcTemp % 1 !== 0 ? Number(calcTemp.toFixed(1)) : calcTemp;
};

const ctof = (cTemp) => {
  const calcTemp = cTemp * (9 / 5) + 32;
  return calcTemp % 1 !== 0 ? Number(calcTemp.toFixed(1)) : calcTemp;
};

module.exports = {
  ftoc,
  ctof,
};
