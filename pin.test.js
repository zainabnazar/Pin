const pin = require('./pin');


test('test 46', () => {
    expect(pin(46)).toEqual([13, 15, 16, 19, 43, 45, 46, 49, 53, 55, 56, 59, 73, 75, 76, 79]);
  });
