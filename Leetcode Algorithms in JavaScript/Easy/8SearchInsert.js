var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            console.log(i);
        }
    }
};


let nums = [1,3,5,6];
let target = 5;
searchInsert(nums, target)