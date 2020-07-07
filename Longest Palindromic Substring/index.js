// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s.length) return "";
    if (s.length === 1) return s;
    let diff = 0;
    let lps = "";
    while (diff < s.length) {
        let start = 0;
        let end = diff;
        while (end < s.length) {
            let substr = "";
            for (let k = start; k <= end; k++) {
                substr += s[k];
            }
            if (isPalindrome(substr) && lps.length < substr.length) {
                lps = substr;
                break;
            }
            start++;
            end++;
        }
        diff++;
    }
    return lps;
};

let isPalindrome = function (substr) {
    if (substr.length === 1) return true;
    let i = 0;
    let j = substr.length - 1;
    while (i <= j) {
        if (substr[i] !== substr[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
};