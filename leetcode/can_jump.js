// Leet code 55 


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {


    let target = nums.length - 1;

    for (var i = nums.length - 1; i >= 0; i--) {

        if (i + nums[i] >= target) {
            target = i;
        }


    }
    return i === 0;
};