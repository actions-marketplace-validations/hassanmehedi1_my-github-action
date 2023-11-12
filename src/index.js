const core = require('@actions/core');

const person = core.getInput('person');

// msg
console.log(`Hello ${person}`);
