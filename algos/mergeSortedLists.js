function ListNode (val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(list1, list2) {
  let head = new ListNode();
  let main = head;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
      if (current1.val <= current2.val) {
          main.next = current1;
          current1 = current1.next;
      } else {
          main.next = current2;
          current2 = current2.next;
      }
      main = main.next;
  }
  if (current1) {
      main.next = current1;
  } else if (current2) {
      main.next = current2;
  }

  return head.next;
};