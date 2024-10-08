function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

// Test cases
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);
while (mergedList) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
// Output: 1 1 2 3 4 4
