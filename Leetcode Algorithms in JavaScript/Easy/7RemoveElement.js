// First Method
nums = [0,1,2,2,3,0,4,2];
var removeElement = function(nums, val) {
    finalAnswer = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
           finalAnswer.push(nums[i]);
        } else {
            finalAnswer.push();
        }
    }
    return finalAnswer;
};

// Second Method
var removeElement = function(nums, val) {
    for(var i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
};


val = 2;
console.log(removeElement(nums, val))