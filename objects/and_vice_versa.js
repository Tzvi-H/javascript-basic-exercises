// Write code that does the reverse, starting from a nested array of pairs and building an object.

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// // Expected output:
// // { title: 'Duke', name: 'Nukem', age: 33 }

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let obj = {};

// nestedArray.forEach(function(innerArray){
//   let key = innerArray[0];
//   let value = innerArray[1];
//   obj[key] = value;
// })

let obj = Object.fromEntries(nestedArray);

console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }