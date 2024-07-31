function main(input) {
  // Parsing the input
  let data = input.trim().split("\n");
  let N = parseInt(data[0], 10);
  //parseInt(data[0], 10): This function parses a string argument (data[0] in this case) and returns an integer of the specified radix (the base in mathematical numeral systems). The 10 specifies that the base is 10, meaning the number is read as a decimal.
  let singers = data[1].split(" ").map(Number);
  // .map(Number): The map() function creates a new array populated with the results of calling a provided function on every element in the calling array. Here, Number is a function that converts each string in the array to a number. Therefore, .map(Number) converts the array of string numbers into an array of actual numbers (integers).

  // Count the frequency of each singer
  let frequency = {};
  for (let singer of singers) {
    if (frequency[singer]) {
      frequency[singer]++;
    } else {
      frequency[singer] = 1;
    }
  }

  // Find the maximum frequency
  let maxFrequency = 0;
  for (let count of Object.values(frequency)) {
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  }

  //The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable, rather than the indices or keys.

  /*Object.values(frequency):

frequency is an object where each key represents a singer, and each value represents the number of songs by that singer.
Object.values(frequency) returns an array of the values of the frequency object, which in this context are the counts of songs for each singer.
for (let count of Object.values(frequency)) { ... }:

The for...of loop iterates over the values in the array returned by Object.values(frequency).
let count declares a variable count that takes on the value of each element in the array on each iteration of the loop.
if (count > maxFrequency) { maxFrequency = count; }:

Inside the loop, this line checks if the current count (number of songs for a particular singer) is greater than maxFrequency.
If it is, maxFrequency is updated to the value of count.*/

  // Count how many singers have the maximum frequency
  let favouriteSingersCount = 0;
  for (let count of Object.values(frequency)) {
    if (count === maxFrequency) {
      favouriteSingersCount++;
    }
  }

  // Output the result
  console.log(favouriteSingersCount);
}

// Sample input handling for competitive programming platform
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});
