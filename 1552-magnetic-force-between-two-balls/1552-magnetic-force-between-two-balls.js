/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a,b) => a-b)
    let low = 1
    let high = position[position.length-1] - position[0]

    while(low <= high) {
        let count = 1
        let previousPosVal = position[0]

        let mid = Math.floor((low+high)/2)
        for(let i=0; i<position.length; i++) {
            if(position[i] - previousPosVal >= mid) {
                count++
                previousPosVal = position[i]
            }
        }

        if(count >= m) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return high

};