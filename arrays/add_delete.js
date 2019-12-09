// We are given the following array of energy sources.

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// Remove 'fossil' from the array and add 'geothermal'.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift()
energy.push('geothermal');

console.log(energy);