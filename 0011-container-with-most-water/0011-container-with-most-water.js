/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let low = 0
    let high = height.length-1

    let result = 0

    while(low < high) {
        let containerHeight = Math.min(height[low], height[high])
        let distance = high - low

        result = Math.max(result, (containerHeight * distance))

        if(height[low] < height[high]) {
            low++
        } else {
            high--
        }
    }

    return result
};