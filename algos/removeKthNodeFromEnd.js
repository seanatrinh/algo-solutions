//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let secondMoves = 0;
  let nodeBeforeRemoval;

  while (secondMoves < k) {
    second = second.next;
    secondMoves++;
  }

  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return first;
  }

  while (second) {
    if (second.next === null) {
      nodeBeforeRemoval = first;
    }
    first = first.next;
    second = second.next;
  }

  nodeBeforeRemoval.next = first.next;
  first.next = null;

  return head;
}