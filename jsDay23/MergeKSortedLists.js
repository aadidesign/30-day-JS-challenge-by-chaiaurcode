
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const merged = mergeTwoLists(a, b);
        lists.push(merged);
    }
    return lists[0];
};

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    return dummy.next;
}
