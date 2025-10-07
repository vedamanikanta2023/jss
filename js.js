var twoSum = function(nums, target){
    let indexes = []
    for(let i in  nums){
       for (let k in nums){
           if (nums[i]+nums[k]===target && i!==k ){
               indexes.push(Number(i),Number(k))
                  return indexes
           }
       }
    }
                  return indexes
};

console.log(twoSum([2,7,11,15],18))