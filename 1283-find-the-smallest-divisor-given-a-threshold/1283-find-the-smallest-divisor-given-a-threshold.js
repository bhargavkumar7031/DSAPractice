/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let low = 1
    let high = 0

    for (let i = 0; i < nums.length; i++) {
        high = Math.max(high, nums[i])
    }

    while (low <= high) {
        let sum = 0
        let mid = Math.floor((low + high) / 2)
        for (let i = 0; i < nums.length; i++) {
            const val = Math.ceil(nums[i] / mid)
            sum += val
        }

        if (sum <= threshold) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low
};