// Leetcode 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let CharSet = new Set();
    let longestLen = 0;

    let left = 0;
    let right = 0;

    while (right < s.length) {
        let char = s[right];
        if (!CharSet.has(char)) {
            CharSet.add(char)
            longestLen = Math.max(longestLen, CharSet.size)
            right++;
        } else {
            CharSet.delete(s[left]);
            left++;
        }
    }
    return longestLen;
};




