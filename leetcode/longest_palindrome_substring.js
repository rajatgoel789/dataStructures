// Leetcode 5 

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let longest = "";
    function isPalindrome(s, left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right)

    }


    for (let i = 0; i < s.length; i++) {
        let oddPal = isPalindrome(s, i, i)
        let evenPal = isPalindrome(s, i, i + 1)

        let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal
        if (longestPal.length > longest.length) longest = longestPal;
    }

    return longest;

};