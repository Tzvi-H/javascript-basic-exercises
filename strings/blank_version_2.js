// Change your isBlank function from the previous exercise to return true if the string contains only whitespaces. For example:

// isBlank('mars'); // false
// isBlank('  ');   // true
// isBlank('');     // true

function isBlank(string) {
  return string.trim() === '';
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true