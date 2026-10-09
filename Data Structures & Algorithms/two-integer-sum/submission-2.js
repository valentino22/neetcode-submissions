class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const [index1, num1] of nums.entries()) {
            for (const [index2,num2] of nums.entries()) {
                if (num1 + num2 == target) {
                    if (index1 == index2) continue;
                    return [index1, index2]
                }
            }
        }
    }
}
