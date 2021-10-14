// First Method
var addTwoNumbers = function(l1, l2) {
    let revFirstAdd = 0, revSecondAdd = 0;
    let twoNumAdd;
    let finalAnswer;
    let final = [];

    for(let i=l1.length-1; i>-1; i--){
        revFirstAdd += l1[i] * 10**i;
    }

    for(let j=l2.length-1; j>-1; j--){
        revSecondAdd += l2[j] * 10**j;
    }

    twoNumAdd = revFirstAdd + revSecondAdd;
    finalAnswer = String(twoNumAdd).split("").map((num)=>{
    return Number(num)
    })

    for(let y=finalAnswer.length - 1; y>-1; y--){
        final.push(finalAnswer[y]);
    }

    return final;
};

// Second Method
const addTwoNumbers = (l1, l2) => {
    let rootNode = new ListNode(0);
    let node = rootNode;
    let sum = 0;
    let carry = 0;

    while(l1 || l2 || sum > 0){

        if (l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum > 9){
            carry = 1;
            sum = sum - 10;
        }

        node.next = new ListNode(sum);
        node = node.next;

        sum = carry;
        carry = 0;
    }

    return rootNode.next;
};


l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
console.log(addTwoNumbers(l1, l2));

