// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function insert(intervals, newInterval) {
    const result = [];
    let mergedInterval = newInterval;
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        mergedInterval[0] = Math.min(mergedInterval[0], intervals[i][0]);
        mergedInterval[1] = Math.max(mergedInterval[1], intervals[i][1]);
        i++;
    }
    result.push(mergedInterval);
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
    
}

// Example usage:
intervals = [[1,3],[6,9]]
newInterval = [2,5]
console.log(insert(intervals,newInterval));