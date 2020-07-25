var findThePaths = function (input) {
    let ans = [];
    recursive(input, ans, [], 0, 0);
    return ans;
};

let recursive = function (input, ans, memoize, i, j) {
    if (i === input.length - 1 && j === input[0].length - 1) {
        memoize.push(input[i][j]);
        ans.push([...memoize]);
        return;
    }
    if (i < input.length && j + 1 < input[0].length && input[i][j + 1]) {
        let index = memoize.indexOf(input[i][j]);
        if (index > -1) {
            memoize.length = index;
        }
        memoize.push(input[i][j]);
        recursive(input, ans, memoize, i, j + 1);
    }
    if (i + 1 < input.length && j < input[0].length && input[i + 1][j]) {
        let index = memoize.indexOf(input[i][j]);
        if (index > -1) {
            memoize.length = index;
        }
        memoize.push(input[i][j]);
        recursive(input, ans, memoize, i + 1, j);
    }
};

let input = [
    [9, 0, 11, 0],
    [17, 22, 26, 28],
    [0, 35, 42, 56]
];

let result = findThePaths(input);
console.log(result);