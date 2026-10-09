class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
   twoSum(nums, target) {

        const seen = new Map();

        for (const [index, num] of nums.entries()) {

            const complement = target - num;

            if (seen.has(complement)) {

                return [seen.get(complement), index];

            }

            seen.set(num, index);

        }

    }
}
