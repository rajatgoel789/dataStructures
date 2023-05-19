// Leetcode 54.

// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = 0;
    let top = 0;

    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    let size = matrix.length * matrix[0].length;

    let res = [];


    while (res.length < size) {


        for (var i = left; i <= right && res.length < size; i++) {
            res.push(matrix[top][i])
        }
        top++;

        for (let i = top; i <= bottom && res.length < size; i++) {
            res.push(matrix[i][right])

        }
        right--;

        for (let i = right; i >= left && res.length < size; i--) {
            res.push(matrix[bottom][i])

        }
        bottom--;

        for (let i = bottom; i >= top && res.length < size; i--) {
            res.push(matrix[i][left])

        }
        left++


    }

    return res;


};