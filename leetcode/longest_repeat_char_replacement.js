// Leetcode 424
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = {};
    topfreq = 0;
    res = 0;
    left = 0;
    right = 0;

    while (right < s.length) {
        let rightChar = s[right];
        map[rightChar] = map[rightChar] + 1 || 1;
        topfreq = Math.max(topfreq, map[rightChar]);

        while ((right - left + 1) - topfreq > k) {
            let leftChar = s[left];
            map[leftChar]--;
            left++

        }

        res = Math.max(res, (right - left + 1))
        right++;


    }

    return res;
};