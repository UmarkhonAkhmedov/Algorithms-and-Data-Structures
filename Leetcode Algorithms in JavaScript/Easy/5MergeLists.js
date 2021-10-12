var mergeTwoLists = function(l1, l2) {
    var finalArray = [];
    for(var i=0; i<l1.length; i++){
        finalArray.push(l1[i]);
    }
    for(var j=0; j<l2.length; j++){
        finalArray.push(l2[j]);
    }

    return finalArray.sort();
};


var l1 = [1,2,4];
var l2 = [1, 3, 4];

console.log(mergeTwoLists(l1, l2));