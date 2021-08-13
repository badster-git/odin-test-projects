const helloWorld = require('./helloWorld');

describe('Hello World', () => {
  it('says "Hello, World!"', () => {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
