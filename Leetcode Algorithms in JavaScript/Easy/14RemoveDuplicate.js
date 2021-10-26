// First Method
var deleteDuplicates = function(head) {

    for(let i=1; i<head.length; i++){
        if(head[i] === head[i-1]){
            head.splice(i, 1);
            i--;
        }
    }
    console.log(head);
};

// Second Method
var deleteDuplicates = function(head) {
    let current = head
    let lastVal;
    while(current){
        lastVal = current
        current = current.next
        if(current && current.val === lastVal.val){
            lastVal.next = current.next
            current = lastVal
        }
    }
    return head
};


head = [1,1,2]
deleteDuplicates(head);