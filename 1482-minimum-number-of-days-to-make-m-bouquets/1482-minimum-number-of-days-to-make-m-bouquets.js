/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    let minDaysRequired = Infinity
    let low = Math.min(...bloomDay)
    let high = Math.max(...bloomDay)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        let count = k
        let boqToMake = m
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                count--;
            } else {
                count = k
            }
            if (count == 0) {
                count = k
                boqToMake--;
            }
            if (boqToMake == 0) {
                minDaysRequired = Math.min(minDaysRequired, mid)
            }
        }

        if ((m - boqToMake) < m) {
            low = mid + 1
        } else {
            high = mid - 1
        }


    }
    if (minDaysRequired == Infinity) {
        return -1
    }

    return minDaysRequired

};