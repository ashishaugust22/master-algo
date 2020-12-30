// Merge Intervals
// Problem Description

// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.



// Problem Constraints
// 1 <= |intervals| <= 105



// Input Format
// First argument is the vector of intervals

// second argument is the new interval to be merged



// Output Format
// Return the vector of intervals after merging



// Example Input
// Input 1:

// Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
// Input 2:

// Given intervals [1, 3], [6, 9] insert and merge [2, 6] .


// Example Output
// Output 1:

//  [ [1, 5], [6, 9] ]
// Output 2:

//  [ [1, 9] ]


// Example Explanation
// Explanation 1:

// (2,5) does not completely merge the given intervals
// Explanation 2:

// (2,6) completely merges the given intervals


module.exports = {
    /**
     * Interval: [start, end]
     * 
     * param A: intervals, a list of Intervals
     * return :a list of Intervals
     */
    solve: function (intervals, new_interval) {
        if (new_interval[0] > new_interval[1]) {
            let temp = new_interval[0];
            new_interval[0] = new_interval[1];
            new_interval[1] = temp;
        }
        intervals.push(new_interval);
        intervals.sort(function (a, b) {
            return a[0] - b[0];
        });
        let res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }
        return res;
    }
};