// https://leetcode.com/problems/palindromic-substrings/

// 647. Palindromic Substrings
// Medium

// 4135

// 135

// Add to List

// Share
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    if (s.length === 0) return count;
    let dp = [];

    // for diagonal elements
    for (let i = 0; i < s.length; i++) {
        if (dp[i] === undefined) {
            dp[i] = [];
        }
        dp[i][i] = true;
        count++;
    }

    // for element with length = 2
    for (let i = 0; i < s.length - 1; i++) {
        dp[i][i + 1] = s[i] === s[i + 1];
        if (dp[i][i + 1]) {
            count++;
        }
    }

    // for general case
    for (let len = 3; len <= s.length; len++) {
        for (let i = 0, j = i + len - 1; j < s.length; i++, j++) {
            dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            if (dp[i][j]) {
                count++;
            }
        }
    }
    return count;
};