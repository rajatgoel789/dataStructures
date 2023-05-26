// Leetcode 141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while(fast){
        if(!fast.next) return false;
        else{
            fast = fast.next.next
            slow=slow.next
        }
        if(fast==slow) return true;
    }
    return false;
    
};