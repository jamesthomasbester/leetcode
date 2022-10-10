var twoSum = function(nums, target) {

    for(let x = 0; x < nums.length; x++){
        for(let y = 0; y < nums.length; y++){
            if((nums[x] + nums[y]) == target){
                return [x, y]
            }
        }
    }
};

console.log(twoSum([1,2,3], 5))