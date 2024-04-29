function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
}
let bmiheight = height / 100;
let BMI = weight / bmiheight ** 2;

if (BMI < 18.5) {
  alert("BELOW WEIGHT");
} else if (BMI <= 18.5 && BMI <= 24.5) {
  alert("HEALTY WEIGHT");
} else if (BMI <= 25.0 && BMI <= 29.9) {
  alert("Overweight");
} else if ((BMI) => 30) {
  alert("Above Obesity");
}
