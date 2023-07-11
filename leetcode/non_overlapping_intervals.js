// Leetcode 435
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const start = 0;
    const end = 1
    intervals = intervals.sort((a, b) => a[end] - b[end])
    let count = 0
    let prev = 0


    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i]
        if (current[start] < intervals[prev][end]) count++
        else prev = i

    }

    return count;



};