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