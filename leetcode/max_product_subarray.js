// LC 152
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let prevMax = nums[0]
    let prevMin = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
        let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
        prevMax = currMax;
        prevMin = currMin;
        res = Math.max(currMax, res);
    }
    return res;
};