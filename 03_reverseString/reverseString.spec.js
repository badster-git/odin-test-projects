const reverseString = require('./reverseString')

describe('reverseString', () => {
  it('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  it('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  it('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
