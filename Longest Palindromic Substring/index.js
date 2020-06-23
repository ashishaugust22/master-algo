// Longest Palindromic Substring
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
    if (s.length === 1) return s;
    let lps = "";
    let str = "";
    let i = 0;
    while (i < s.length - 1) {
        let j = s.length - 1;
        while (j > i) {
            while (s[i] !== s[j] && j > i) {
                j--;
            }
            let i1 = i;
            let j1 = j;
            let str = "";
            for (; j1 >= i; j1--) {
                if (s[i1] !== s[j1] && i <= j1) {
                    str = "";
                    break;
                }
                str = str + s[i1];
                i1++;
            }
            if (str.length > lps.length) {
                lps = str;
            }
            j--;
        }
        i++;
    }
    return lps;
};

