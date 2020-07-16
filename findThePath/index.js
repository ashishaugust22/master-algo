var findThePaths = function (input) {
    let ans = { count: 0 };
    recursive(input, ans, 0, 0);
    return ans;
};

let recursive = function (input, ans, i, j) {
    if (i === input.length - 1 && j === input[0].length - 1) {
        ans.count++;
        return;
    }
    if (i < input.length && j + 1 < input[0].length && input[i][j + 1]) {
        recursive(input, ans, i, j + 1);
    }
    if (i + 1 < input.length && j < input[0].length && input[i + 1][j]) {
        recursive(input, ans, i + 1, j);
    }
};

let input = [
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
];

let result = findThePaths(input);
console.log(result);