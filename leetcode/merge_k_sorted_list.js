// LC - 23 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null;

    while(lists.length>1){
        let list1 = lists.shift()
        let list2 = lists.shift()

        let merged = mergeList(list1, list2);

        lists.push(merged);


    }
    
    return lists[0];



    
};
function mergeList(list1, list2){
    let templist = new ListNode(0);
    let head = templist;

    while(list1 && list2){
        if(list1.val<=list2.val){
            templist.next = list1;
            list1 = list1.next;
        }else{
            templist.next = list2;
            list2 = list2.next;
        }
        templist = templist.next;
    }

    if(list1==null){
        templist.next = list2
    }else{
        templist.next = list1
    }

    return head.next;

}