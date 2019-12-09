// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

// bmi = weight_in_kg / height_in_m**2
// Round the result to two decimals. For example:

// calculateBMI(180, 80); // 24.69

function calculateBMI(height, weight) {
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;

  return bmi.toFixed(2);
}

