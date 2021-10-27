// First Method
var merge = function(nums1, m, nums2, n) {
    let finalMergedArray = [];
    firstSlicing = nums1.slice(0, m);
    secondSlicing = nums2.slice(0, n);

    finalMergedArray = firstSlicing.concat(secondSlicing);
    finalMergedArray.sort();
    console.log(finalMergedArray);

    return finalMergedArray;
};

// Second Method
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for(let i = nums1.length - nums2.length; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort((a,b) => a-b);
};


let  nums1 = [0], m = 0, nums2 = [1], n = 1;
merge(nums1, m, nums2, n);