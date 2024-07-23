class Solution {
    constructor() {}
     
      chooseVcationDates(weather, n, k, t) {
       let count = 0;

    for (let start = 0; start <= n - k; start++) {
        let maxTemp = -Infinity;
        for (let end = start; end < n; end++) {
            maxTemp = Math.max(maxTemp, weather[end]);
            if (maxTemp > t) break; // If temperature exceeds t, break out of the loop
            if (end - start + 1 >= k) count++;
        }
    }
    console.log(count);
}
}

new Solution().chooseVcationDates([-5 ,0, -10],3,1,15)