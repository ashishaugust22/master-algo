var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

let input = [1, 2, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(input);

console.log(result);