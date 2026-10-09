class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const out = new Map();
        for (const str of strs){
            const key = str.split("").sort().join("")
            if (out.has(key)){
                out.get(key).push(str)
            }
            else 
            {
                out.set(key, [str])
            }
        }
        return Array.from(out.values());
    }
}
