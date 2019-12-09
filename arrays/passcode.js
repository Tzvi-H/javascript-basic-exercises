// We generated parts of a passcode and now want to 
// combine them into a string. Write some code that returns
// a string, with each portion of the passcode separated by 
// a hyphen (-).

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// // Write some code here.
// // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'


let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcodeJoined = ''

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    passcodeJoined += '-'
  }
  passcodeJoined += passcode[i];
}

console.log(passcodeJoined);