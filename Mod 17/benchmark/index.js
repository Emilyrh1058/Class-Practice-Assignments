const Benchmark = require("benchmark");
const { linearSearch, binarySearch } = require("./search");
const { bubbleSort } = require("./sort");
const { quickSort } = require("./sort")
const { mostDuplicates } = require('./dupes');
const { optimizedDuplicates } = require('./dupes');

const numbers = [];
for (let i = 1; i < 20000; i++) {
  // populate the array with the numbers 1 to 1,000,000
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

// grab the last number in the array as the number we want to find
// const target = numbers[numbers.length - 1];

const suite = new Benchmark.Suite();

// suite
//   .add("linear search", function () {
//     linearSearch(numbers, target);
//   })
//   .add("binary search", function () {
//     binarySearch(numbers, target, 0, numbers.length - 1);
//   })
//   .on("complete", function () {
//     // loop over and print each result
//     this.forEach((result) =>
//       console.log(
//         `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
//       )
//     );
//   })
//   .run();
// run: node Mod\ 17/Lesson\ 3/benchmark/index.js


// suite
//   .add("bubble sort", function () {
//     const testArray = [...numbers];

//     bubbleSort(testArray);
//   })
//   .add("quick sort", function () {
//     const testArray = [...numbers];
//     console.log(testArray)
//     quickSort(testArray);
//   })
//   .on("complete", function () {
//     this.forEach((result) =>
//       console.log(
//         `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
//       )
//     );
//   })
//   .run();


// suite
//   .add('quick sort', function() {
//     const testArray = [...numbers];

//     quickSort(testArray);
//   })
//   .add('js sort', function() {
//     const testArray = [...numbers];

//     // benchmark the built-in sort method
//     testArray.sort((a, b) => {
//       return a - b;
//     });
//   })
//   .on('complete', function() {
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();

suite
  .add('duplicates test', function() {
    mostDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  suite
  .add('optimized test', function() {
    optimizedDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();