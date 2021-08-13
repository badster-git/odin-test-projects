const { ftoc, ctof } = require("./tempConversion");

describe("tempConversion", () => {
  describe("ftoc", () => {
    it("works", () => {
      expect(ftoc(32)).toEqual(0);
    });
    it("rounds to 1 decimal", () => {
      expect(ftoc(100)).toEqual(37.8);
    });
    it("works with negatives", () => {
      expect(ftoc(-100)).toEqual(-73.3);
    });
  });

  describe("ctof", () => {
    it("works", () => {
      expect(ctof(0)).toEqual(32);
    });
    it("rounds to 1 decimal", () => {
      expect(ctof(73.2)).toEqual(163.8);
    });
    it("works with negatives", () => {
      expect(ctof(-10)).toEqual(14);
    });
  });
});
