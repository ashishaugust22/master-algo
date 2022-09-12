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
    // Store counters for the the start of the window and the longest string's length
    var startOfWindow = 0,
        longestStringLength = 0;

    // Initialise a Map to store the characters of the current string
    var characterMap = new Map();

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Store the current character, and its position in the Map (saves repeatedly looking it up)
        let currentCharacter = s[i];
        let currentCharacterPositionInMap = characterMap.get(currentCharacter);

        // Check if current character exists in the Map, and was found within the current window
        if (currentCharacterPositionInMap >= startOfWindow) {
            // Move the current window to start after the first instance of the current character
            startOfWindow = currentCharacterPositionInMap + 1;
        }

        // Add the current character to the Map with its position in the string
        characterMap.set(currentCharacter, i);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            i - startOfWindow + 1
        );
    }

    return longestStringLength;
};
