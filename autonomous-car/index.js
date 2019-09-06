const successInput = require('./data/success.json');
const {simulate} = require('./simulator');

const output = simulate(successInput);

console.log(output);
