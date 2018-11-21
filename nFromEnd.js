var removeNthFromEnd = function(head, n) {
    if(n === 1 && head.next === null) return null;
    if(n === 0) return head;
    let length = 0;
    let firstRun = head;
    while(firstRun){
        length += 1;
        firstRun = firstRun.next;
    }
    if(length === n) return head.next;
    let secondRun = head;
    let current = 1;
    while(current <= length - n - 1){
        secondRun = secondRun.next;
        current += 1;
    }
    secondRun.next = secondRun.next.next;
    return head;
    
};
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
//faster solution to problem

 function ListNode(val) {
    this.val = val;
     this.next = null;
 }
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0);
    let slow = start;
    let fast = start;
    slow.next = head;

    //Move fast in front so that the gap between slow and fast becomes n
    for(let i=1; i<=n+1; i++)   {
        fast = fast.next;
    }
    //Move fast to the end, maintaining the gap
    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    //Skip the desired node
    slow.next = slow.next.next;
    return start.next;
    
};