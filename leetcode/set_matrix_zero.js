// Leetcode 73 

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
 

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]


// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] 

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1



var setZeroes = function (matrix) {
    let pos = [];

    for (var i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                pos.push([i, j])
            }
        }
    }
    console.log(pos);
    for (let i = 0; i < pos.length; i++) {

        const [row, col] = pos[i];
       
        for (let i = 0; i < matrix.length; i++) {
        
            matrix[i][col] = 0;
        }
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0
        }

    }

    // return matrix;
    console.log(matrix);

};

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])