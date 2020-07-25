/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let ans = 0;
    let i = 0;
    let j = 0;
    let k = 0;
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
            // j++;
        }
    }
    if (ans < i - j) {
        ans = i - j;
    }
    return ans;
};
