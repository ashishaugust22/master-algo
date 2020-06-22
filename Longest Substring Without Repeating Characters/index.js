// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let ans = 0;
    let j = 0;
    let i = 0;
    let map = {};
    for (; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = s[i];
        } else {
            if (ans < i - j) {
                ans = i - j;
            }
            while (s[j] !== s[i]) {
                delete map[s[j]];
                j++;
            }
            j++;
        }
    }
    if (ans < i - j) {
        ans = i - j;
    }
    return ans;
};


