/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    findPages(arr, k) {
        if(arr.length < k) return -1
        let low = Math.max(...arr)
        let high = 0
        
        for(let i=0; i<arr.length; i++) {
            high += arr[i]
        }
        
        while(low<=high) {
            let mid = Math.floor((low+high)/2)
            
            let studentCount = 1
            let sum = 0
            for(let i=0; i<arr.length; i++) {
                if(sum+arr[i] <= mid) {
                    sum += arr[i]
                } else {
                    studentCount++
                    sum = arr[i]
                }
            }
            
            if(studentCount > k) {
                low = mid + 1 
            } else {
                high = mid - 1
            }
        }
        
        return low
    }
}