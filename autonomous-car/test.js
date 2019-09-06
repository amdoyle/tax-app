const assert = require('assert');

const outOfBoundsInput = require('./data/out-of-bounds.json');
const successInput = require('./data/success.json');
const { simulate } = require('./simulator');

// You may add additional tests
describe('autonomous-car simulate', () => {
  describe('when the car navigates successfully', () => {
    it('should return a success status', () => {
      const output = simulate(successInput);
      assert.deepEqual(output, { "status": "success" });
    });
  });

  describe('when the car goes out of bounds', () => {
    it('should return an error status', () => {
      const output = simulate(outOfBoundsInput);
      assert.deepEqual(output, { "status": "error", "position": "2" });
    });
  });
});
