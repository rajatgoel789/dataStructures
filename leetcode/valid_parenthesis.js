// Leet code 20


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char =="(" || char =="{" ||char =="[") stack.push(char);
        else{
            prev = stack.pop();
            if(prev =="(" && char!==")") return false
            if(prev =="{" && char!=="}") return false
            if(prev =="[" && char!=="]") return false
            if(prev == undefined) return false
        }
    }
    return stack.length===0;
};