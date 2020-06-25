// Moving Average from Data Stream

// 1st Approach
// Brute Force

let movingAverage = function (arr) {
    this.average = 0;
    this.arr = arr;
    for (let i = 0; i < arr.length; i++) {
        this.average = this.getAverage(this.average, arr[i], i);
    }
};

movingAverage.prototype.getAverage = function (prevAvg, x, n) {
    return ((prevAvg * n) + x) / (n + 1);
};

movingAverage.prototype.addToStream = function (num) {
    this.arr.push(num);
    this.average = this.getAverage(this.average, num, this.arr.length);
    return this.average;
};

let arr = [10, 20, 30, 40, 50];
let movAvg = new movingAverage(arr);

console.log(movAvg.addToStream(60));