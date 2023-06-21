// 212. Word Search II
// Hard

// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.


// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]


// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []


// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {

    let result = [];
    let root = buildTrie(words);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(root, i, j, result, board);
        }
    }

    return result;
};

function dfs(node, i, j, result, board) {
    if (node.word) {
        result.push(node.word);
        node.word = null;
    }
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return
    if (!node[board[i][j]]) return;

    let c = board[i][j];
    board[i][j] = "#";
    dfs(node[c], i + 1, j, result, board);
    dfs(node[c], i - 1, j, result, board);
    dfs(node[c], i, j + 1, result, board);
    dfs(node[c], i, j - 1, result, board);
    board[i][j] = c;

}

function buildTrie(words) {
    let root = {};
    for (let word of words) {
        let node = root;
        for (ch of word) {
            if (!node[ch]) node[ch] = {}
            node = node[ch];
        }
        node.word = word;
    }
    return root;
}