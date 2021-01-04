// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


var threeSumClosest = function(nums, target) {
  let diff = Infinity;
  let container = null;

  nums.sort((a,b) => a - b);

  for(let i = 0; i < nums.length - 2; i++){
      let j = i + 1;
      let k = nums.length - 1;

      while(j < k){
          let sum = nums[i] + nums[j] + nums[k];
          let newDiff = sum - target;

          if(Math.abs(newDiff) < diff) container = sum;
          diff = Math.min(Math.abs(newDiff), diff);

          if(newDiff >= 0) k--;
          else j++;
      }
  }
  console.log(container)

};

threeSumClosest([-1,2,1,-4], 1)
