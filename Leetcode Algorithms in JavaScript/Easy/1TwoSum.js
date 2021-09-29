var lists = []
var twoSum = function(nums, target) {
    var numsLength = nums.length;
    for(let i=0; i<numsLength; i++){
        for(let j=0; j<numsLength; j++){
            if (nums[i] === nums[j]){
              continue
            } else if ((nums[i] + nums[j]) == target){
                lists.push(i);
                lists.push(j)
            }
        }
    }
};
nums = [2,7,11,15]
nums = [2,7,11,15]
target = 9
twoSum(nums, target)


const half = Math.ceil(lists.length / 2);
const finalAnswer = lists.slice(0, half)
console.log(finalAnswer)

// Effective Answer
var twoSum = function(nums, target){
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}



// Simple Way
var twoSum = function(nums, target){
    for(var i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
           if (nums[i] === nums[j]){
             continue
           } else if ((nums[i] + nums[j]) == target){
               return [i, j]
           }
       }
    }
}







