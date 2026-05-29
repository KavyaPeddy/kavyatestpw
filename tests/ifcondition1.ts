for (let i = 0; i < 5; i++) {
  console.log(i);
}
 
let fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}
 
 
let numbers = [10, 20, 30];
for (const index in numbers) {
  console.log(index);
}
 
 
let nums = [1, 2, 3];
nums.forEach((num) => {
  console.log(num);
});

let marks = 75;
 
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
 