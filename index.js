let solve = function (A) {
    let map = {};
    let maxFreq = 0;
    A.forEach(el => {
        if (!map[el]) map[el] = [];
    });
    Object.keys(map).forEach(el => {
        maxFreq = Math.max(maxFreq, map[el].length);
    });
    console.log(map);
    return maxFreq;
};

let A = [8, 15, 1, 10, 5, 19, 19, 3, 5, 6, 6, 2, 8, 2, 12, 16, 3, 8, 17, 12, 5, 3, 14, 13, 3, 2, 17, 19, 16, 8, 7, 12, 19, 10, 13, 8, 20, 16, 15, 4, 12, 3];

console.log(solve(A));