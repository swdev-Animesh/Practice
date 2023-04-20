//challenge 1

let bmi_mark, bmi_john;
let mark_height = 1.69;
let mark_mass = 78;
let john_height = 1.95;
let john_mass = 92;
let markHigherBmi = true;
bmi_mark = mark_mass / (mark_height * mark_height);
console.log("mark bmi is " + bmi_mark);
bmi_john = john_mass / john_height ** 2;
console.log("john bmi is " + bmi_john);
if (bmi_mark > bmi_john) {
  console.log(markHigherBmi);
} else {
  markHigherBmi = false;
  console.log(markHigherBmi);
}
//challenge 1 end

//challenge 2

if (bmi_mark > bmi_john) {
  console.log(`bmi of mark is ${bmi_mark - bmi_john} higher than john`);
} else {
  console.log(`bmi of john is ${bmi_john}`);
}
//challenge 2 end
