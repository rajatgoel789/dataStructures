//  Leet code 153

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0,
      right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
     
      if (nums[mid] > nums[right]) left = mid + 1;
      else right = mid;
    }
    return nums[left];
  };


// Explanation:
// It initializes two pointers left and right to the first and last indices of the array, respectively.
// The function enters a while loop that runs as long as left is less than right.
// Inside the while loop, the function calculates the middle index of the current range using the formula mid = Math.floor((left + right) / 2).
// The function checks whether the value at the middle index nums[mid] is greater than the value at the right index nums[right].
// If the value at the middle index is greater than the value at the right index, then the minimum element must be in the right half of the current range, so the left pointer is updated to mid + 1.
// If the value at the middle index is not greater than the value at the right index, then the minimum element must be in the left half of the current range, so the right pointer is updated to mid.
// The while loop continues until the range is reduced to a single element, at which point left and right point to the same index, and the minimum element is simply nums[left].
// Finally, the function returns the minimum element of the array.
// ===============================================================
// ===============================================================
// Complexity
// Time complexity:
// It is O(log N), where N is the number of elements in the input array. This is because at each step of the binary search, the size of the search space is halved.
// Space complexity:
// It is O(1), which means that the amount of memory used by the algorithm is constant and does not depend on the size of the input array. This is because the algorithm only uses a few variables to keep track of the search space and does not create any additional data structures.