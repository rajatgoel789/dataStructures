// Leetcode 56
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const start = 0;
    const end = 1;

    // Sorting
    intervals = intervals.sort((a,b)=> a[start]-b[start]);

    let previous = intervals[0];
    let res = [previous]

    for (current of intervals){
        if(current[start]<=previous[end]){
            previous[end] = Math.max(previous[end], current[end])

        }else{
            res.push(current)
            previous = current;
        }


    }

    return res;


};