
class Solution {
    /**
    * @param number[] stations
    * @param number k

    * @returns float
    */
    minMaxDist(stations, K) {
        // code here
        let low = 0
        let high = 0
        
        for(let i =1; i<stations.length; i++) {
            high = Math.max(stations[i] - stations[i-1], high)
        }
        
        while(high-low > 1e-6) {
            const mid = (low+high)/2.0
            
            let count = this.maximizeGasStations(mid, stations)
            
            if(count > K) {
                low = mid
            } else {
                high = mid
            }
        }
        
        return high
    }
    
    maximizeGasStations(dist, stations) {
        let count = 0
        
        for(let i=1; i<stations.length; i++) {
            let gap = stations[i] - stations[i-1]
            count += Math.ceil(gap/dist)-1
        }
        
        return count
    }
}
