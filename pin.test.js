const pin = require('./pin');

// test('split the number into digits', () => {
//   expect(pin(46)).toEqual([[1,4,5,7],[3,5,6,9]]);
// });

test('split the number into digits', () => {
    expect(pin(46)).toEqual([13, 15, 16, 19, 43, 45, 46, 49, 53, 55, 56, 59, 73, 75, 76, 79]);
  });