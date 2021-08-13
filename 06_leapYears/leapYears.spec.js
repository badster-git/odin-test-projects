const leapYears = require('./leapYears')

describe('leapYears', () => {
  it('works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  it('works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  it('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  it('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  it('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  it('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
