// Manish is the coach of a high school football team. He has come up with a training regime of difficulty 'd' but he is afraid that it might result in his team getting exhausted quickly and prone to fatigue. So he has decided to break the training in 'n' number of days where every day has a certain amount of difficulty and the difficulty of each day adds up to 'd' the original difficulty. But he also wants to make sure that his training results in a greater output so he cannot spread the difficulty of training without planning. The result can be determined by calculating the GCD of the difficulty of all the days. Return the greatest result that can be achieved from the training.
//Output Format:
//You have to return a single integer denoting the maximum result that can be achieved from the training.

// Sample Input:
// 9 2

// Sample Output:
// 3
// Returns the greatest achievable GCD
function maxTrainingGCD(d, n) {
  // Edge cases
  if (d === 0) return 0;                 // sum is zero → all days must be 0 → gcd = 0
  if (n <= 0) throw new Error("n must be positive");
  if (n > d) return 0;                   // can't split into n positive integers

  const cap = Math.floor(d / n);         // gcd can't exceed this
  let best = 0;

  // scan divisors up to sqrt(d)
  const lim = Math.floor(Math.sqrt(d));
  for (let i = 1; i <= lim; i++) {
    if (d % i === 0) {
      const a = i;
      const b = d / i;
      if (a <= cap && a > best) best = a;
      if (b <= cap && b > best) best = b;
    }
  }
  return best;
}

// Example uses:
console.log(maxTrainingGCD(100, 5));   // 20  (split: 20,20,20,20,20)
console.log(maxTrainingGCD(14, 3));    // 4   (e.g., 4,4,6 → gcd 2? Wait: best gcd=4 with 4,4,6? No → valid split: 4,4,6 has gcd 2. Best gcd≤⌊14/3⌋=4 and divisor of 14 ≤4 → 2. Function returns 2.)
console.log(maxTrainingGCD(14, 3));    // 2   (corrected)
console.log(maxTrainingGCD(7, 7));     // 1   (must be all ones)
console.log(maxTrainingGCD(7, 8));     // 0   (impossible with positives)
