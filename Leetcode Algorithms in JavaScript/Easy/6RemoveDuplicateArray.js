let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function(nums) {

    let i = 0, j = 1;
    while(j < nums.length){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
            j++
        } else{
            j++
        }
    }
    return i + 1
};


console.log(removeDuplicates(nums))