class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const [index1, num1] of nums.entries()) {
           let target2 = target - num1;
           let index2 = nums.indexOf(target2);
           if (index2 !== -1 && index2 !== index1) {
            return [index1, index2];
           }
        }
    }
}
