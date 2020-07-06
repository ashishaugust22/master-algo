// 159. Longest Substring with At Most K Distinct Characters


// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

// Example 1:

// Input: "eceba"
// Output: 3
// Explanation: t is "ece" which its length is 3.
// Example 2:

// Input: "ccaabbb"
// Output: 5
// Explanation: t is "aabbb" which its length is 5.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s, k) {
    let start = 0;
    let ans = 0;
    let i = 0;
    let j = 0;
    let map = {};
    if (k === 0) return 0;
    for (; i < s.length; i++) {
        if (Object.keys(map).length < k || (Object.keys(map).length === k && map[s[i]])) {
            if (!map[s[i]]) { map[s[i]] = 0; }
            map[s[i]]++;
        } else {
            if (ans < i - j) {
                ans = i - j;
            }
            while (Object.keys(map).length === 2) {
                if (map[s[j]] === 1) {
                    delete map[s[j]];
                } else {
                    map[s[j]]--;
                }
                j++;
            }
            map[s[i]] = 1;
        }
    }
    if (ans < i - j) {
        ans = i - j;
    }
    return ans;
};