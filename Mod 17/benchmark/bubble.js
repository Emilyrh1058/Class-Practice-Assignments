const Benchmark = require('benchmark');
const { bubbleSort } = require('../benchmark/sort');

const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}
// IF YOU INCREASE THE # IT QUADRUPLES, AKA QUADRATIC COMPLEXITY
// THIS MEANS THAT NESTED LOOPS ALWAYS RESULT IN 0(n2)
const suite = new Benchmark.Suite;

suite
  .add('bubble sort', function() {
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  