function removeKdigits(num, k) {
    let stack = [];

    for (let digit of num) {
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // If we still have digits to remove, remove from the end
    stack = k > 0 ? stack.slice(0, -k) : stack;

    // Join into string and remove leading zeros
    let result = stack.join("").replace(/^0+/, "");

    return result === "" ? "0" : result;
}

console.log(removeKdigits("1432219", 3)); // "1219"
console.log(removeKdigits("10200", 1));   // "200"
console.log(removeKdigits("10", 2)); 
