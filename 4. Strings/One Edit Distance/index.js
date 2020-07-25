// 161. One Edit Distance
// https://leetcode.com/problems/one-edit-distance/

// Given two strings s and t, determine if they are both one edit distance apart.

// Note: 

// There are 3 possiblities to satisify one edit distance apart:

// Insert a character into s to get t
// Delete a character from s to get t
// Replace a character of s to get t
// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.
// Example 2:

// Input: s = "cab", t = "ad"
// Output: false
// Explanation: We cannot get t from s by only one step.
// Example 3:

// Input: s = "1203", t = "1213"
// Output: true
// Explanation: We can replace '0' with '1' to get t.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    let slen = s.length;
    let tlen = t.length;

    if (!s && !t) return false;
    if (s === t) return false;
    if (Math.abs(slen - tlen) > 1) return false;

    let invalidCount = 0;
    let maxLength = Math.max(slen, tlen);
    s = s.split('');
    t = t.split('');

    let i = 0;
    let j = 0;

    while ((i < maxLength || j < maxLength) && invalidCount <= 1) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else if (s[i] === t[j + 1]) {
            invalidCount++;
            j++;
        } else if (s[i + 1] === t[j]) {
            invalidCount++;
            i++;
        } else if (s[i + 1] === t[j + 1]) {
            invalidCount++;
            i++;
            j++;
        }
        else {
            return false;
        }
    }
    return invalidCount === 1 ? true : false;
};