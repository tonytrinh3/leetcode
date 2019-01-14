
//https://leetcode.com/problems/two-sum/





var twoSum = function(nums, target) {
    //nums = nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j <= nums.length-1;j++){
            if (i !== j && nums[i]+nums[j] === target){
                return [i,j]
                
            }
        }
    }
};

//const nums = [2,7,11,15];
//const target = 9;

//const nums = [3,3];
//const target = 6;

const nums = [2,5,5,11];
const target = 10;

console.log(twoSum(nums,target));