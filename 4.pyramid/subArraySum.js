// // Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

// Example 1
// Input
//  arr = [3,1,2,4]
// Output
// 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum is 17.

function sumSubarrayMins(arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;

  let left = new Array(n);
  let right = new Array(n);

  let stack = [];

  // Find previous less element (PLE)
  for (let i = 0; i < n; i++) {
    let count = 1;
    while (stack.length && stack[stack.length - 1][0] > arr[i]) {
      count += stack.pop()[1];
    }
    left[i] = count;
    stack.push([arr[i], count]);
  }

  stack = [];

  // Find next less or equal element (NLE)
  for (let i = n - 1; i >= 0; i--) {
    let count = 1;
    while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
      count += stack.pop()[1];
    }
    right[i] = count;
    stack.push([arr[i], count]);
  }

  // Calculate result
  let result = 0n; // use BigInt to avoid overflow
  for (let i = 0; i < n; i++) {
    result += BigInt(arr[i]) * BigInt(left[i]) * BigInt(right[i]);
  }

  return Number(result % BigInt(MOD));
}

// Example
console.log(sumSubarrayMins([3,1,2,4])); // Output: 17
