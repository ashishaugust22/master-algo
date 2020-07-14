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
// time complexity is O(n cube)




// Approch II

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s == null || s.length < 1) return "";
    let start = 0;
    let end = 0;
    let lpsLen = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            lpsLen = len;
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substr(start, lpsLen);
};

var expandAroundCenter = function (s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return j - i - 1;
};;


// time complexity is O(n)