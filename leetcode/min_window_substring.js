// LC -  76
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = new Map();
    for (ch of t) {
        if (!map.has(ch)) {
            map.set(ch, 1)
        } else {
            map.set(ch, map.get(ch) + 1)
        }
    }

    let left = 0;
    let right = 0;
    let minStr = "";
    let strLen = Infinity;
    let count = map.size;


    while (right < s.length) {
        let rChar = s[right];
        if (map.has(rChar)) {
            map.set(rChar, map.get(rChar) - 1)
            if (map.get(rChar) == 0) count--;
        }
        right++;
        while (count == 0) {
            if (right - left < strLen) {
                strLen = right - left;
                minStr = s.slice(left, right);
            }
            let lChar = s[left];
            if (map.has(lChar)) {
                map.set(lChar, map.get(lChar) + 1)
                if (map.get(lChar) > 0) count++;
            }
            left++;

        }

    }
    return minStr;

};