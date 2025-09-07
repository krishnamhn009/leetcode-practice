// Dholu is very creative and wants to play with strings and he has a very good idea. You have given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order

// Input Format:
// first line consists of a string
// Output Format:
// print the output string
// Sample Input:
// cbacdcbc

// Sample Output:
// abcd

// Explanation: Since if we only collect unique letters, they come out to be 'c', 'b', 'a' and 'd' and when they are arranged lexicographically the output is abcd.

// Constraints:
// 1<= s.length<= 10000
// Note: Input consists of only lower case letters.


function removeDuplicateLetters(s) {
    let freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let stack = [];
    let visited = new Set();

    for (let ch of s) {
        freq[ch]--;

        if (visited.has(ch)) continue;

        while (stack.length > 0 && stack[stack.length - 1] > ch && freq[stack[stack.length - 1]] > 0) {
            visited.delete(stack.pop());
        }

        stack.push(ch);
        visited.add(ch);
    }

    return stack.join("");
}

console.log(removeDuplicateLetters("bcabc"));     // "abc"
console.log(removeDuplicateLetters("cbacdcbc"));  // "acdb"
console.log(removeDuplicateLetters("bbcaac"));    // "bac"
