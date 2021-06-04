// Linear Approach
const linear = (num) => {
  // Implement the Fibonacci algorithm using the linear approach
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

  let sequence = [1, 1];
  for (let i = 2; i <= num; i++) {
    let nextNumberInSequence = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumberInSequence);
  }

  return sequence[num - 1]
};

// THIS IS BIG 0(n)

console.log(linear(10)); // => 55
